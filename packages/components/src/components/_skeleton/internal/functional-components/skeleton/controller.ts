import { BaseController } from '../base-controller';
import type { ControllerInterface } from '../generic-types';
import { ClickButtonController } from '../click-button/controller';
import type { SkeletonCallbacks, SkeletonRefs, SkeletonState } from './component';
import { normalizeLabel, validateLabel, type LabelPropType } from '../schema/props/label';
import { normalizeName, validateName, type NamePropType } from '../schema/props/name';
import { normalizeShow, validateShow, type ShowPropType } from '../schema/props/show';

export class SkeletonController<State extends SkeletonState>
       extends BaseController<State>
       implements ControllerInterface<SkeletonState, SkeletonCallbacks, SkeletonRefs> {
       private readonly clickButtonController = new ClickButtonController<State>(this.component);

       public componentWillLoad(props: Partial<SkeletonState>): void {
               this.watchLabel(props.label);
               this.watchName(props.name);
               this.watchShow(props.show);
       }

       public watchLabel = (value?: LabelPropType): void => {
               const normalized = normalizeLabel(value);
               if (validateLabel(normalized)) {
                       this.setState('label', normalized);
               }
       };

       public watchName = (value?: NamePropType): void => {
               const normalized = normalizeName(value);
               if (validateName(normalized)) {
                       this.setState('name', normalized);
               }
       };

       public watchShow = (value?: ShowPropType): void => {
               const normalized = normalizeShow(value);
               if (validateShow(normalized)) {
                       this.setState('show', normalized);
               }
       };

	public handleClick = (): void => {
		// eslint-disable-next-line no-console
		console.log(this, 'button clicked');
	};

	public setButtonRef = (element?: HTMLButtonElement): void => {
		this.clickButtonController.setButtonRef(element);
	};
}
