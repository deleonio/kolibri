import { Generic } from '@a11y-ui/core';

import { Stringified } from '../../../types/common';
import { KoliBriHorizontalIcons } from '../../../types/icons';
import { isIcon } from '../../../types/props/icons';
import { objectObjectHandler, parseJson, watchValidator } from '../../../utils/prop.validators';
import { isString } from '../../../utils/validator';
import { InputController } from './controller';
import { Props, Watches } from './types-icon';

const beforePatchIcons = (value: unknown, nextState: Map<string, unknown>): void => {
	const icons = value as KoliBriHorizontalIcons;
	if (typeof icons === 'object' && icons !== null) {
		if (isString(icons.right, 1)) {
			icons.right = { icon: icons.right as string };
		}
		if (isString(icons.left, 1)) {
			icons.left = { icon: icons.left as string };
		}
		nextState.set('_icons', icons);
	}
};

export class InputIconController extends InputController implements Watches {
	protected readonly component: Generic.Element.Component & Props;

	public constructor(component: Generic.Element.Component & Props, name: string, host?: HTMLElement) {
		super(component, name, host);
		this.component = component;
	}

	public validateIcon(value?: Stringified<KoliBriHorizontalIcons>): void {
		this.validateIcons(value);
	}

	public validateIcons(value?: Stringified<KoliBriHorizontalIcons>): void {
		objectObjectHandler(value, () => {
			try {
				value = parseJson<KoliBriHorizontalIcons>(value as string);
				// eslint-disable-next-line no-empty
			} catch (e) {
				// value behält den ursprünglichen Wert
			}
			watchValidator(
				this.component,
				'_icons',
				(value): boolean => {
					return (
						typeof value === 'object' && value !== null && (isString(value.left, 1) || isIcon(value.left) || isString(value.right, 1) || isIcon(value.right))
					);
				},
				new Set(['KoliBriHorizontalIcon']),
				value,
				{
					hooks: {
						beforePatch: beforePatchIcons,
					},
					required: true,
				}
			);
		});
	}

	public componentWillLoad(): void {
		super.componentWillLoad();
		this.validateIcons(this.component._icons || this.component._icon);
	}
}
