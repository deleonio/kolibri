import type { JSX } from '@stencil/core';
import { Component, h, Host, Prop, State, Watch } from '@stencil/core';
import { ClickButtonFC } from '../../internal/functional-components/click-button/component';
import { ClickButtonController } from '../../internal/functional-components/click-button/controller';
import type { WebComponentInterface } from '../../internal/functional-components/generic-types';
import type { LabelProp, LabelPropType } from '../../internal/schema/props/label';

type Props = LabelProp;

@Component({
	tag: 'kol-click-button',
	shadow: true,
})
export class KolClickButton implements WebComponentInterface<Props> {
	private readonly controller = new ClickButtonController();

	public buttonRef?: HTMLButtonElement;

	@Prop()
	public _label!: LabelPropType;

	@State()
	public label: LabelPropType = '';

	@Watch('_label')
	public watchLabel(value?: LabelPropType): void {
		this.controller.watchLabel(this, value);
	}

	public componentWillLoad(): void {
		this.controller.componentWillLoad(this);
	}

	public render(): JSX.Element {
		return (
			<Host>
				<ClickButtonFC
					label={this.label}
					refButton={(element) => this.controller.setButtonRef(this, element)}
					handleClick={() => this.controller.handleClick(this)}
				/>
			</Host>
		);
	}
}
