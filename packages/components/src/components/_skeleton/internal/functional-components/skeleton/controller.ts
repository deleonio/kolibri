import type { WebComponentInterface } from '../generic-types';
import type { SkeletonRenderProps, SkeletonRenderStates } from './component';
import type { CountPropType } from '../../schema/props/count';
import { normalizeCount, validateCount } from '../../schema/props/count';
import type { NamePropType } from '../../schema/props/name';
import { normalizeName, validateName } from '../../schema/props/name';

type SkeletonComponent = WebComponentInterface<SkeletonRenderProps, SkeletonRenderStates & SkeletonRenderProps> & {
	buttonRef?: HTMLButtonElement;
};

export class SkeletonController {
	public componentWillLoad(component: SkeletonComponent): void {
		this.watchCount(component, component._count);
		this.watchName(component, component._name);
	}

	public watchCount(component: SkeletonComponent, value?: CountPropType): void {
		const normalized = normalizeCount(value);
		if (validateCount(normalized)) {
			component.count = normalized;
		}
	}

	public watchName(component: SkeletonComponent, value?: NamePropType): void {
		const normalized = normalizeName(value);
		if (validateName(normalized)) {
			component.name = normalized;
		}
	}

	public toggle(component: SkeletonComponent): void {
		component.show = !component.show;
	}

	public onKeydown(component: SkeletonComponent, event: KeyboardEvent): void {
		if (event.key === 'Escape') {
			// eslint-disable-next-line no-console
			console.log('Show should be toggled');
			this.toggle(component);
		}
	}

	public onComponentKeydown(component: SkeletonComponent, event: KeyboardEvent): void {
		if (event.key === 'Enter' || event.key === ' ') {
			this.handleClick(component);
		}
	}

	public handleClick(component: SkeletonComponent): void {
		void component;
		// eslint-disable-next-line no-console
		console.log(this, 'button clicked');
	}

	public focusButton(component: SkeletonComponent): void {
		component.buttonRef?.focus();
	}

	public setButtonRef(component: SkeletonComponent, element?: HTMLButtonElement): void {
		component.buttonRef = element;
	}
}
