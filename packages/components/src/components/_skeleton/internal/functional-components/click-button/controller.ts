import type { WebComponentInterface } from '../generic-types';
import type { ClickButtonRenderStates } from './component';
import type { LabelProp, LabelPropType } from '../../schema/props/label';
import { normalizeLabel, validateLabel } from '../../schema/props/label';

type ClickButtonComponent = WebComponentInterface<LabelProp, ClickButtonRenderStates & LabelProp> & {
	buttonRef?: HTMLButtonElement;
};

export class ClickButtonController {
	public componentWillLoad(component: ClickButtonComponent): void {
		this.watchLabel(component, component._label);
	}

	public watchLabel(component: ClickButtonComponent, value?: LabelPropType): void {
		const normalized = normalizeLabel(value) as LabelPropType;
		if (validateLabel(normalized)) {
			component.label = normalized;
		}
	}

	public handleClick(component: ClickButtonComponent): void {
		// eslint-disable-next-line no-console
		console.log(this, component.buttonRef, 'button clicked');
	}

	public focusButton(component: ClickButtonComponent): void {
		component.buttonRef?.focus();
	}

	public setButtonRef(component: ClickButtonComponent, element?: HTMLButtonElement): void {
		component.buttonRef = element;
	}
}
