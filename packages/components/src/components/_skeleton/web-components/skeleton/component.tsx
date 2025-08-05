import type { EventEmitter, JSX } from '@stencil/core';
import { Component, Event, h, Host, Listen, Method, Prop, State, Watch } from '@stencil/core';
import type { WebComponentInterface } from '../../internal/functional-components/generic-types';
import type {
	SkeletonEmitters,
	SkeletonListeners,
	SkeletonMethods,
	SkeletonRenderProps,
	SkeletonRenderStates,
} from '../../internal/functional-components/skeleton/component';
import { SkeletonFC } from '../../internal/functional-components/skeleton/component';
import { SkeletonController } from '../../internal/functional-components/skeleton/controller';
import type { CountPropType } from '../../internal/schema/props/count';
import type { LabelPropType } from '../../internal/schema/props/label';
import type { NamePropType } from '../../internal/schema/props/name';
import type { ShowPropType } from '../../internal/schema/props/show';

@Component({
	tag: 'kol-skeleton',
	shadow: true,
})
export class KolSkeleton implements WebComponentInterface<SkeletonRenderProps, SkeletonRenderStates, SkeletonEmitters, SkeletonMethods, SkeletonListeners> {
	private readonly controller = new SkeletonController();

	public buttonRef?: HTMLButtonElement;

	@Prop()
	public _count!: CountPropType;

	@State()
	public count: CountPropType = 0;

	@Watch('_count')
	public watchCount(value?: CountPropType): void {
		this.controller.watchCount(this, value);
	}

	@Prop()
	public _name!: NamePropType;

	@State()
	public name: NamePropType = '';

	@Watch('_name')
	public watchName(value?: NamePropType): void {
		this.controller.watchName(this, value);
	}

	@State()
	public label: LabelPropType = 'Label';

	@State()
	public show: ShowPropType = true;

	@Method()
	public focusButton(): Promise<void> {
		this.controller.focusButton(this);
		return Promise.resolve();
	}

	@Listen('keydown')
	public handleKeyDown(event: KeyboardEvent): void {
		this.controller.onComponentKeydown(this, event);
	}

	@Event() public loaded!: EventEmitter<number>;

	@Method()
	public toggle(): Promise<void> {
		this.controller.toggle(this);
		return Promise.resolve();
	}

	@Listen('keydown', { target: 'window' })
	public onKeydown(event: KeyboardEvent): void {
		this.controller.onKeydown(this, event);
	}

	public componentWillLoad(): void {
		this.controller.componentWillLoad(this);
	}

	public render(): JSX.Element {
		return (
			<Host>
				<SkeletonFC
					count={this.count}
					label={this.label}
					name={this.name}
					handleClick={() => this.controller.handleClick(this)}
					onLoaded={this.loaded}
					show={this.show}
					refButton={(element) => this.controller.setButtonRef(this, element)}
				/>
			</Host>
		);
	}
}
