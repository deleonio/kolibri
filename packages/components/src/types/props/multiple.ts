import { Generic } from '@a11y-ui/core';

import { watchBoolean } from '../../utils/prop.validators';

/* types */
export type MultiplePropType = boolean;

/**
 * Makes the input accept multiple inputs.
 */
export type PropMultiple = {
	multiple: MultiplePropType;
};

/* validator */
export const validateMultiple = (component: Generic.Element.Component, value?: MultiplePropType): void => {
	watchBoolean(component, '_multiple', value);
};
