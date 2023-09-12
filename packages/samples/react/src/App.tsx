import React, { useMemo } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Route as MyRoute, Routes as MyRoutes } from './shares/types';

import { Option } from '@public-ui/components';
import { KolAlert, KolButton, KolSelect, KolVersion } from '@public-ui/react';
import { FC, useState } from 'react';
import { ROUTES } from './shares/routes';
import { THEME_OPTIONS, Theme } from './shares/theme';
import PackageJson from '../package.json';
import { getTheme, setTheme, setStorage, getThemeName } from './shares/store';

const THEME_REGEX = /theme=([^&]+)/;

setStorage(localStorage);

const getThemeFromLocation = () => {
	if (THEME_REGEX.test(window.location.hash)) {
		const match = window.location.hash.match(THEME_REGEX);
		if (Array.isArray(match) && match.length > 0) {
			return match[0].replace(THEME_REGEX, '$1').toLowerCase();
		}
	}
	return getTheme();
};

const getRouteList = (routes: MyRoutes, offset = '/'): string[] => {
	let list: string[] = [];
	for (const key in routes) {
		if (routes[key]) {
			const ThisRoute: MyRoute = routes[key];
			const path = `${offset}${key}`;
			if (typeof ThisRoute === 'function') {
				list.push(path);
			} else if (typeof ThisRoute === 'object' && ThisRoute !== null) {
				list = list.concat(getRouteList(ThisRoute, `${path}/`));
			}
		}
	}
	return list;
};

const getRouteTree = (routes: MyRoutes): ReturnType<typeof Route>[] => {
	const tree: ReturnType<typeof Route>[] = [];
	for (const key in routes) {
		if (routes[key]) {
			const ThisRoute: MyRoute = routes[key];
			const path = `/${key}`;
			if (typeof ThisRoute === 'function') {
				tree.push(<Route key={path} path={path} element={<ThisRoute />} />);
				tree.push(
					<Route
						key={`${path}/all`}
						path={`${path}/all`}
						element={
							<div className="d-grid gap-4">
								{THEME_OPTIONS.filter((theme) => ['bmf', 'zoll-v2'].indexOf((theme as Option<Theme>).value) >= 0).map((theme) => (
									<div className="d-grid gap-2" key={(theme as Option<Theme>).value} data-theme={(theme as Option<Theme>).value}>
										<strong>{theme.label}</strong>
										<ThisRoute />
										<hr aria-hidden="true" />
									</div>
								))}
							</div>
						}
					/>,
				);
			} else if (typeof ThisRoute === 'object' && ThisRoute !== null) {
				const keys = Object.keys(ThisRoute);
				if (keys.length > 0) {
					tree.push(
						<Route
							key={path}
							path={`${path}/*`}
							element={
								<Routes>
									<Route path="/" element={<Navigate to={keys[0]} />} />
									{getRouteTree(ThisRoute)}
								</Routes>
							}
						/>,
					);
				}
			}
		}
	}
	return tree;
};

const ROUTE_LIST = getRouteList(ROUTES);

console.log(JSON.stringify(ROUTE_LIST, null, 2));

const clearHash = (str: string) => str.replace(/\?.*/g, '').replace(/^#/g, '');

const getIndexOfRoute = (str: string) => {
	return ROUTE_LIST.indexOf(clearHash(str));
};

const componentList: Map<string, Option<string>> = new Map();
ROUTE_LIST.forEach((route) => {
	const routeSplit = route.split('/');
	componentList.set(routeSplit[1], {
		label: routeSplit[1],
		value: route,
	});
});

function getComponentFromSample(url: string): string {
	const routeSplit = url.split('/');
	return componentList.get(routeSplit[1])?.value || '';
}

export const App: FC = () => {
	const [theme] = useState(getThemeFromLocation());
	const [sample, setSample] = useState(clearHash(window.location.hash));
	const [active, setActive] = useState(false);

	const currentComponent = useMemo(() => {
		return getComponentFromSample(sample);
	}, [sample]);

	const title = document.querySelector('title');
	if (title) {
		title.innerHTML = `KoliBri-Handout - ${getThemeName(getTheme())} | v${PackageJson.version}`;
	}

	const catchRef = () => {
		setTimeout(() => {
			setActive(true);
		}, 500);
	};

	const componentSelectOn = {
		onChange: (_e: Event, v: unknown) => {
			const path = (v as string[])[0];
			setSample(path);
			window.location.href = `#${path}?theme=${theme}`;
		},
	};

	const on = {
		onChange: (_event: Event, value: unknown) => {
			if (active) {
				value = Array.isArray(value) ? value[0] : value;
				setTheme(value as Theme);
				window.location.href =
					window.location.href
						.replace(THEME_REGEX, '')
						.replace(/(\?|&{1,})$/g, '')
						.replace(/&{2,}/g, '&') + `?theme=${value as string}`;
				window.location.reload();
			}
		},
	};

	const next = {
		onClick: () => {
			let idx = getIndexOfRoute(window.location.hash);
			if (idx >= ROUTE_LIST.length - 1) {
				idx = 0;
			} else {
				idx += 1;
			}
			setSample(clearHash(ROUTE_LIST[idx]));
			window.location.href = `#${ROUTE_LIST[idx]}?theme=${theme}`;
		},
	};

	const prev = {
		onClick: () => {
			let idx = getIndexOfRoute(window.location.hash);
			if (idx <= 0) {
				idx = ROUTE_LIST.length - 1;
			} else {
				idx -= 1;
			}
			setSample(clearHash(ROUTE_LIST[idx]));
			window.location.href = `#${ROUTE_LIST[idx]}?theme=${theme}`;
		},
	};

	return (
		<div className="grid gap-4" data-theme={theme} ref={catchRef}>
			<div className="no-print grid gap-4 toolbar">
				<dl>
					<dt>Beispiel:</dt>
					<dd>
						<strong>
							{/* <KolLink _href={`${window.location.href}?theme=${theme}`} _label={sample} _target="codesandbox" /> */}
							{sample.replace(/\//g, ' ')}
						</strong>{' '}
						({getIndexOfRoute(window.location.hash) + 1}/{ROUTE_LIST.length})
					</dd>
					<dd>
						<KolVersion _version={PackageJson.version}></KolVersion>
					</dd>
				</dl>
				{active && (
					<>
						<KolButton
							_ariaLabel="Weiter zum nächsten Komponenten-Beispiel"
							_icon="codicon codicon-arrow-right"
							_hideLabel
							_label="Weiter"
							_on={next}
							_tooltipAlign="left"
						/>
						<KolButton
							_ariaLabel="Weiter zum nächsten Komponenten-Beispiel"
							_icon="codicon codicon-arrow-left"
							_hideLabel
							_label="Zurück"
							_on={prev}
							_tooltipAlign="right"
							_variant="ghost"
						/>
					</>
				)}
				<KolSelect
					className="col-span-2 sm:col-auto"
					_disabled={!active}
					_hideLabel
					_label="Komponente wechseln"
					_id="theme-toggle"
					_list={Array.from(componentList.values())}
					_on={componentSelectOn}
					_value={[currentComponent]}
				></KolSelect>
				<KolSelect
					_label="Theme wechseln"
					className="col-span-2 sm:col-auto"
					_hideLabel
					_disabled={!active}
					_id="theme-toggle"
					_list={THEME_OPTIONS}
					_on={on}
					_value={[theme]}
				></KolSelect>
			</div>
			<hr aria-hidden="true" />
			<div className="p-4">
				<Routes>
					{getRouteTree(ROUTES)}
					<Route path="*" element={<KolAlert _type="info">This code example has not been migrated yet - it&#39;s coming soon!</KolAlert>} />
				</Routes>
			</div>
		</div>
	);
};
