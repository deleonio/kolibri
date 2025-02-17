import { Generic } from '@a11y-ui/core';
import { Component, h, Host, JSX, Prop, State, Watch } from '@stencil/core';

import { translate } from '../../i18n';
import { Stringified } from '../../types/common';
import { PropColor, validateColor } from '../../types/props/color';
import { devHint } from '../../utils/a11y.tipps';
import { watchBoolean } from '../../utils/prop.validators';
import { colorRgba } from '../badge/color-rgba';
import { API, States } from './types';

const max = 360;
function degreeToRadians(degree: number): number {
	return (degree * Math.PI) / 180;
}
function getColorNumber(degree: number): number {
	return Math.round(((Math.cos(degreeToRadians(degree)) + 1) / 2) * 225);
}

@Component({
	tag: 'kol-kolibri',
	styleUrls: {
		default: './style.css',
	},
	shadow: true,
})
export class KolKolibri implements API {
	public render(): JSX.Element {
		const fillColor: string =
			this.state._animate === true
				? `rgb(${getColorNumber(this.state._color.red)},${getColorNumber(this.state._color.green)},${getColorNumber(this.state._color.blue)})`
				: `rgb(${this.state._color.red},${this.state._color.green},${this.state._color.blue})`;
		return (
			<Host>
				<svg role="img" aria-label={translate('kol-kolibri-logo')} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" fill={fillColor}>
					<path d="M353 322L213 304V434L353 322Z" />
					<path d="M209 564V304L149 434L209 564Z" />
					<path d="M357 316L417 250L361 210L275 244L357 316Z" />
					<path d="M329 218L237 92L250 222L272 241L329 218Z" />
					<path d="M353 318L35 36L213 300L353 318Z" />
					<path d="M391 286L565 272L421 252L391 286Z" />
					{this.state._labeled === true && (
						<text x="250" y="525" fill={fillColor}>
							KoliBri
						</text>
					)}
				</svg>
			</Host>
		);
	}

	private interval?: number;

	/**
	 * Gibt an, ob das Bild-Logo farblich animiert werden soll.
	 */
	@Prop() public _animate?: boolean = false;

	/**
	 * Gibt an, in welcher Farbe das Bild-Logo initial dargestellt werden soll.
	 */
	@Prop() public _color?: Stringified<PropColor> = '#003c78';

	/**
	 * Defines whether the component has a label.
	 */
	@Prop() public _labeled?: boolean;

	@State() public state: States = {
		_animate: false,
		_color: {
			red: 0,
			green: 60,
			blue: 120,
		},
		_labeled: true,
	};

	@Watch('_animate')
	public validateAnimate(value?: boolean): void {
		watchBoolean(this, '_animate', value);
	}

	private handleColorChange: Generic.Element.NextStateHooksCallback = (nextValue: unknown, nextState: Map<string, unknown>): void => {
		if (typeof nextValue === 'string') {
			const rgba = colorRgba(nextValue);
			nextState.set('_color', {
				red: rgba[0],
				green: rgba[1],
				blue: rgba[2],
			});
		} else {
			devHint(`[KolKolibri] You used the complex color schema. For the KoliBri we use need the color as hex string.`);
		}
	};

	@Watch('_color')
	public validateColor(value?: Stringified<PropColor>): void {
		validateColor(this, value, {
			defaultValue: '#003c78',
			hooks: {
				beforePatch: this.handleColorChange,
			},
		});
	}

	@Watch('_labeled')
	public validateLabeled(value?: boolean): void {
		watchBoolean(this, '_labeled', value);
	}

	public componentWillLoad(): void {
		this.validateAnimate(this._animate);
		this.validateColor(this._color);
		this.validateLabeled(this._labeled);
	}

	public componentDidRender(): void {
		clearInterval(this.interval);
		if (this.state._animate) {
			this.interval = setInterval(() => {
				this.state = {
					...this.state,
					_color: {
						red: (this.state._color.red + 1) % max,
						green: (this.state._color.green + 2) % max,
						blue: (this.state._color.blue + 3) % max,
					},
				};
			}, 50) as unknown as number;
		}
	}

	public disconnectedCallback(): void {
		clearInterval(this.interval);
	}
}
