import React from 'react';

import { KolBreadcrumb } from '@public-ui/react';
import { SampleDescription } from '../SampleDescription';

import type { FC } from 'react';

export const BreadcrumbBasic: FC = () => (
	<>
		<SampleDescription>
			<p>
				Hier wird eine Breadcrumb-Navigation dargestellt. Beim klicken auf die Links wird man auf Unterseiten weitergeleitet. In diesem Beispiel sind diese
				Unterseiten leer.
			</p>
		</SampleDescription>
		<div className="grid gap-4">
			<KolBreadcrumb
				_label="Breadcrumb aus Text-Links"
				_links={[
					{ _label: 'Startseite', _href: '#/sample-page' },
					{ _label: 'Unterseite der Startseite', _href: '#/sample-page' },
					{
						_label: 'Unterseite der Unterseite',
						_href: '#/sample-page',
					},
				]}
			></KolBreadcrumb>
			<KolBreadcrumb
				_label="Breadcrumb aus Icons- oder Text-Links"
				_links={[
					{
						_label: 'Startseite',
						_icons: 'codicon codicon-home',
						_hideLabel: true,
						_href: '#/sample-page',
					},
					{
						_label: 'Unterseite der Startseite mit sehr langem Link-Test',
						_href: '#/sample-page',
					},
					{
						_label: 'Unterseite der Unterseite',
						_href: '#/sample-page',
					},
				]}
			></KolBreadcrumb>
			<KolBreadcrumb
				_label="Breadcrumb aus Icons- und Text-Links"
				_links={[
					{ _label: 'Startseite', _icons: 'codicon codicon-home', _href: '#/sample-page' },
					{
						_label: 'Unterseite der Startseite und ich_bin_ein_echt_langes_zusammengesetztes_Worte_und_versuche_das_Layout_zu_brechen',
						_href: '#/sample-page',
					},
					{
						_label: 'Unterseite der Unterseite',
						_href: '#/sample-page',
					},
				]}
			></KolBreadcrumb>
		</div>
	</>
);
