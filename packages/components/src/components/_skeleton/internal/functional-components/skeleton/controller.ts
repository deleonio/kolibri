import type { CountPropType } from '../../schema/props/count';
import { normalizeCount, validateCount } from '../../schema/props/count';
import type { LabelPropType } from '../../schema/props/label';
import type { NamePropType } from '../../schema/props/name';
import { normalizeName, validateName } from '../../schema/props/name';
import type { ShowPropType } from '../../schema/props/show';
import { normalizeShow, validateShow } from '../../schema/props/show';
import { BaseController } from '../base-controller';
import { ClickButtonController } from '../click-button/controller';
import type { ControllerInterface, WebComponentInterface } from '../generic-types';
import type { SkeletonCallbacks, SkeletonEmitters, SkeletonListeners, SkeletonMethods, SkeletonRefs, SkeletonRenderProps } from './component';

export class SkeletonController<Host extends WebComponentInterface<Record<never, never>, SkeletonEmitters, SkeletonMethods, SkeletonListeners>>
	extends BaseController<Host, SkeletonRenderProps>
	implements ControllerInterface<SkeletonRenderProps, SkeletonCallbacks, SkeletonRefs, SkeletonMethods, SkeletonListeners>
{
	private readonly clickButtonController = new ClickButtonController<Host>(this.component);

	public componentWillLoad(props: SkeletonRenderProps): void {
		const { count, label, name, show } = props;
		this.watchCount(count);
		this.watchLabel(label);
		this.watchName(name);
		this.watchShow(show);
	}

	public watchCount(value?: CountPropType): void {
		const normalized = normalizeCount(value);
		if (validateCount(normalized)) {
			this.setRenderProps('count', normalized);
		}
	}

	public watchLabel(value?: LabelPropType): void {
		this.clickButtonController.watchLabel(value);
		this.setRenderProps('label', this.clickButtonController.getRenderProps().label);
	}

	public watchName(value?: NamePropType): void {
		const normalized = normalizeName(value);
		if (validateName(normalized)) {
			this.setRenderProps('name', normalized);
		}
	}

	public watchShow(value?: ShowPropType): void {
		const normalized = normalizeShow(value);
		if (validateShow(normalized)) {
			this.setRenderProps('show', normalized);
		}
	}

	public toggle(): void {
		this.setRenderProps('show', !this.renderProps.show);
	}

	public onKeydown = (event: KeyboardEvent): void => {
		if (event.key === 'Escape') {
			this.setRenderProps('show', false);
		}
	};

	public handleClick = (): void => {
		// eslint-disable-next-line no-console
		console.log(this, 'button clicked');
	};

	public focusButton = (): void => {
		this.clickButtonController.focusButton();
	};

	public setButtonRef = (element?: HTMLButtonElement): void => {
		this.clickButtonController.setButtonRef(element);
	};
}
