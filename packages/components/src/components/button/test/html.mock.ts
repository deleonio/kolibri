import { mixMembers } from 'stencil-awesome-test';

import { ButtonProps, ButtonStates } from '../../../types/button-link';
import { getSpanWcHtml } from '../../span/test/html.mock';
import { getTooltipHtml } from '../../tooltip/test/html.mock';

type Slots = {
	expert?: string;
};

export const getButtonWcHtml = (
	props: ButtonProps,
	slots: Slots = {
		expert: undefined,
	},
	additionalAttrs = ''
): string => {
	const state = mixMembers<ButtonProps, ButtonStates>(
		{
			_icon: {},
			_label: false, // ⚠ required
			_type: 'button',
			_variant: 'normal',
		},
		props
	);
	const ariaControls = typeof state._ariaControls === 'string' ? state._ariaControls : undefined;
	const ariaExpanded = typeof state._ariaExpanded === 'boolean' ? state._ariaExpanded : undefined;
	const type = typeof state._type === 'string' ? state._type : 'button';
	const variant = typeof state._variant === 'string' ? state._variant : 'normal';
	const hasExpertSlot: boolean = state._label === false;
	return `<kol-button-wc${additionalAttrs}>
	<button${ariaControls ? ' aria-controls="nonce"' : ''}${
		typeof state._ariaExpanded === 'boolean' ? ` aria-expanded="${ariaExpanded === true ? 'true' : 'false'}"` : ''
	} class="${variant}" type="${type}">
		${getSpanWcHtml(
			{
				...props,
				_label: hasExpertSlot ? false : state._label,
			},
			slots
		)}
	</button>
	${getTooltipHtml(
		{
			_align: state._tooltipAlign,
			_id: 'nonce',
			_label: typeof state._label === 'string' ? state._label : '',
		},
		` aria-hidden="true"${hasExpertSlot || !state._hideLabel ? ' hidden' : ''}`
	)}
</kol-button-wc>`;
};

export const getButtonHtml = (props: ButtonProps): string => {
	const state = mixMembers<ButtonProps, ButtonStates>(
		{
			_icon: {},
			_label: false, // ⚠ required
			_type: 'button',
			_variant: 'normal',
		},
		props
	);
	return `<kol-button>
  <mock:shadow-root>
    ${getButtonWcHtml(
			props,
			{
				expert: `<slot name="expert" slot="expert"></slot>`,
			},
			` class="button ${state._variant}"`
		)}
  </mock:shadow-root>
</kol-button>`;
};
