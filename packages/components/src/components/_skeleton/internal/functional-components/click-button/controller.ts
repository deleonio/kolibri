import { BaseController } from '../base-controller';
import type { ControllerInterface } from '../generic-types';
import type { ClickButtonCallbacks, ClickButtonRefs, ClickButtonState } from './component';
import { normalizeLabel, validateLabel, type LabelPropType } from '../schema/props/label';

export class ClickButtonController<State extends ClickButtonState>
       extends BaseController<State>
       implements ControllerInterface<ClickButtonState, ClickButtonCallbacks, ClickButtonRefs> {
       private buttonRef?: HTMLButtonElement;

       public componentWillLoad(props: Partial<ClickButtonState>): void {
               this.watchLabel(props.label);
       }

       public watchLabel = (value?: LabelPropType): void => {
               const normalized = normalizeLabel(value);
               if (validateLabel(normalized)) {
                       this.setState('label', normalized);
               }
       };

	public handleClick = (): void => {
		// eslint-disable-next-line no-console
		console.log(this, this.buttonRef, 'button clicked');
	};

	public setButtonRef = (element?: HTMLButtonElement): void => {
		this.buttonRef = element;
	};
}
