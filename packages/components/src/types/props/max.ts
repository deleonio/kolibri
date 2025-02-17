import { Generic } from '@a11y-ui/core';

import { watchNumber, WatchNumberOptions } from '../../utils/prop.validators';
import { RowsPropType } from './rows';

/* types */
export type MaxPropType = number;

/**
 * Number of rows of the input element that should be visible at the same time.
 */
export type PropMax = {
	max: MaxPropType;
};

/* validator */
export const validateMax = (component: Generic.Element.Component, value?: RowsPropType, options?: WatchNumberOptions): void => {
	watchNumber(component, '_max', value, options);
};
