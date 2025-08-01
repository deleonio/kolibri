import type { EventEmitter, JSX } from '@stencil/core';
import { Component, Event, h, Host, Prop, Watch } from '@stencil/core';
import type { WebComponentInterface } from '../../internal/functional-components/generic-types';
import type { SkeletonEmitters } from '../../internal/functional-components/skeleton/component';
import { SkeletonFC } from '../../internal/functional-components/skeleton/component';
import { SkeletonController } from '../../internal/functional-components/skeleton/controller';
import type { LabelProp, LabelPropType } from '../../internal/schema/props/label';
import type { NameProp, NamePropType } from '../../internal/schema/props/name';
import type { ShowProp, ShowPropType } from '../../internal/schema/props/show';

type Props = LabelProp & NameProp & ShowProp;

type Interface = WebComponentInterface<Props, SkeletonEmitters>;

@Component({
	tag: 'kol-skeleton',
	shadow: true,
})
export class KolSkeleton implements Interface {
	private controller = new SkeletonController<KolSkeleton>(this);

	@Prop()
	public _label!: LabelPropType;

	private label: LabelPropType = '';

	@Watch('_label')
	public watchLabel(value?: LabelPropType): void {
		this.controller.watchLabel(value);
	}

	@Prop()
	public _name!: NamePropType;

	private name: NamePropType = '';

	@Watch('_name')
	public watchName(value?: NamePropType): void {
		this.controller.watchName(value);
	}

	@Prop()
	public _show?: ShowPropType;

	private show: ShowPropType = false;

	@Watch('_show')
	public watchShow(value?: ShowPropType): void {
		this.controller.watchShow(value);
	}

	@Event() public loaded!: EventEmitter<number>;

	public componentWillLoad(): void {
		this.controller.componentWillLoad({
			label: this._label,
			name: this._name,
			show: this._show,
		});
	}

	public render(): JSX.Element {
		return (
			<Host>
				<SkeletonFC
					label={this.label}
					name={this.name}
					handleClick={this.controller.handleClick}
					onLoaded={this.loaded}
					show={this.show}
					refButton={this.controller.setButtonRef}
				/>
			</Host>
		);
	}
}
