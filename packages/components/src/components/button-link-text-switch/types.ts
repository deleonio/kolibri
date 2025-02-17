import { Generic } from '@a11y-ui/core';

import { ButtonOrLinkOrTextWithChildrenProps } from '../../types/button-link-text';
import { PropHideLabel } from '../../types/props/hide-label';

type RequiredProps = {
	link: ButtonOrLinkOrTextWithChildrenProps;
};
type OptionalProps = {
	hasChildren: boolean;
	selected: boolean;
} & PropHideLabel;

export type Props = Generic.Element.Members<RequiredProps, OptionalProps>;
