import { Generic } from '@a11y-ui/core';

import { watchBoolean } from '../../utils/prop.validators';

/* types */
export type HasFooterPropType = boolean;

/**
 * Shows the slot="footer".
 * @deprecated will be removed in v2
 */
export type PropHasFooter = {
	hasFooter: HasFooterPropType;
};

/* validator */
export const validateHasFooter = (component: Generic.Element.Component, value?: HasFooterPropType): void => {
	watchBoolean(component, '_hasFooter', value);
};
