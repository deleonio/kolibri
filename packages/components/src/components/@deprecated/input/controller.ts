import { Generic } from '@a11y-ui/core';

import { InputTypeOnDefault } from '../../../types/input/types';
import { AdjustHeightPropType, validateAdjustHeight } from '../../../types/props/adjust-height';
import { validateHideLabel } from '../../../types/props/hide-label';
import { LabelWithExpertSlotPropType, validateLabelWithExpertSlot } from '../../../types/props/label';
import { a11yHint, a11yHintDisabled, devHint } from '../../../utils/a11y.tipps';
import { stopPropagation, tryToDispatchKoliBriEvent } from '../../../utils/events';
import { objectObjectHandler, parseJson, setState, watchBoolean, watchString } from '../../../utils/prop.validators';
import { validateTabIndex } from '../../../utils/validators/tab-index';
import { Props as ButtonProps } from '../../button/types';
import { ControlledInputController } from '../../input-adapter-leanup/controller';
import { Props as AdapterProps } from '../../input-adapter-leanup/types';
import { Props, Watches } from './types';

type ValueChangeListener = (value: string) => void;

export class InputController extends ControlledInputController implements Watches {
	protected readonly component: Generic.Element.Component & Props & AdapterProps;

	private readonly valueChangeListeners: ValueChangeListener[] = [];

	public constructor(component: Generic.Element.Component & Props, name: string, host?: HTMLElement) {
		super(component, name, host);
		this.component = component;
	}

	public validateAccessKey(value?: string): void {
		watchString(this.component, '_accessKey', value);
	}

	public validateAdjustHeight(value?: AdjustHeightPropType): void {
		validateAdjustHeight(this.component, value);
	}

	public validateDisabled(value?: boolean): void {
		watchBoolean(this.component, '_disabled', value);
		if (value === true) {
			a11yHintDisabled();
		}
	}

	public validateError(value?: string): void {
		watchString(this.component, '_error', value);
	}

	public validateHideLabel(value?: boolean): void {
		validateHideLabel(this.component, value, {
			hooks: {
				afterPatch: () => {
					if (this.component.state._hideLabel) {
						a11yHint('Property hide-label for inputs: Only use for exceptions like search inputs that are clearly identifiable by their context.');
					}
				},
			},
		});
	}

	public validateHint(value?: string): void {
		watchString(this.component, '_hint', value);
	}

	public validateId(value?: string): void {
		watchString(this.component, '_id', value, {
			hooks: {
				afterPatch: () => {
					this.setAttribute('id', this.formAssociated, this.component.state._id as string);
				},
			},
			minLength: 1,
		});
		if (value === '' || typeof value === 'undefined') {
			devHint(`Eine eindeutige ID an den Eingabefeldern ist nicht zwingend erforderlich, könnte aber für die E2E-Tests relevant sein.`);
		}
	}

	public validateLabel(value?: LabelWithExpertSlotPropType): void {
		validateLabelWithExpertSlot(this.component, value);
	}

	public validateOn(value?: InputTypeOnDefault): void {
		if (typeof value === 'object') {
			setState(this.component, '_on', value);
		}
	}

	public validateSmartButton(value?: ButtonProps | string): void {
		objectObjectHandler(value, () => {
			try {
				value = parseJson<ButtonProps>(value as string);
				// eslint-disable-next-line no-empty
			} catch (e) {
				// value behält den ursprünglichen Wert
			}
			setState(this.component, '_smartButton', value);
		});
	}

	public validateTabIndex(value?: number): void {
		validateTabIndex(this.component, value);
	}

	public componentWillLoad(): void {
		super.componentWillLoad();
		this.validateAccessKey(this.component._accessKey);
		this.validateAdjustHeight(this.component._adjustHeight);
		this.validateError(this.component._error);
		this.validateDisabled(this.component._disabled);
		this.validateHideLabel(this.component._hideLabel);
		this.validateHint(this.component._hint);
		this.validateId(this.component._id);
		this.validateLabel(this.component._label);
		this.validateSmartButton(this.component._smartButton);
		this.validateOn(this.component._on);
		this.validateTabIndex(this.component._tabIndex);
	}

	protected onBlur(event: Event): void {
		this.component._alert = true;
		this.component._touched = true;

		// Event handling
		stopPropagation(event);
		tryToDispatchKoliBriEvent('blur', this.host);

		// Callback
		if (typeof this.component._on?.onBlur === 'function') {
			this.component._on.onBlur(event);
		}
	}

	protected onChange(event: Event): void {
		const value = (event.target as HTMLInputElement).value;

		// Event handling
		stopPropagation(event);
		tryToDispatchKoliBriEvent('change', this.host, value);

		// Static form handling
		this.setFormAssociatedValue(value);

		// Callback
		if (typeof this.component._on?.onChange === 'function') {
			/**
			 * TODO
			 * Value-Handling muss für InputDate und InputNumber optimiert werden
			 * - value
			 * - valueAsNumber
			 * - valueAsDate
			 */
			this.component._on.onChange(event, value);
		}

		/**
		 * TODO: Was ist das?
		 */
		this.valueChangeListeners.forEach((listener) => listener(value));
	}

	protected onClick(event: Event): void {
		// Event handling
		stopPropagation(event);
		tryToDispatchKoliBriEvent('click', this.host);

		// Callback
		if (typeof this.component._on?.onClick === 'function') {
			this.component._on.onClick(event);
		}
	}

	protected onFocus(event: Event): void {
		this.component._alert = true;

		// Event handling
		stopPropagation(event);
		tryToDispatchKoliBriEvent('focus', this.host);

		// Callback
		if (typeof this.component._on?.onFocus === 'function') {
			this.component._on.onFocus(event);
		}
	}

	public setValue(event: Event, value: string | number | boolean): void {
		this.setFormAssociatedValue(value as string);
		if (typeof this.component._on?.onChange === 'function') {
			this.component._on.onChange(event, value);
		}
	}

	public addValueChangeListener(listener: ValueChangeListener) {
		this.valueChangeListeners.push(listener);
	}

	/**
	 * Hinweis: In der Subklasse 'InputPasswordController'
	 *          werden die Methoden onBlur und onFocus
	 *          überschrieben.
	 *          Es werden somit zunächst die Methoden der
	 *          Subklasse ausgeführt und danach die der
	 *          Oberklassen.
	 */
	public readonly onFacade = {
		onBlur: this.onBlur.bind(this),
		onChange: this.onChange.bind(this),
		onClick: this.onClick.bind(this),
		onFocus: this.onFocus.bind(this),
	};
}
