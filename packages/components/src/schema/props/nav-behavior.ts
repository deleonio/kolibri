/* types */
import type { Generic } from 'adopted-style-sheets';
import { watchValidator } from '../utils';

const navBehaviorPropTypeOptions = ['tab-navigation', 'arrow-navigation'] as const;
export type NavBehaviorPropType = (typeof navBehaviorPropTypeOptions)[number];

/**
 * Defines which navigation behavior is active.
 */
export type PropNavBehavior = {
	behavior: NavBehaviorPropType;
};

/* validator */
export const validateNavBehavior = (component: Generic.Element.Component, value?: NavBehaviorPropType): void => {
	watchValidator(
		component,
		`_behavior`,
		(value) => typeof value === 'string' && navBehaviorPropTypeOptions.includes(value),
		new Set([`KoliBriNavBehavior {${navBehaviorPropTypeOptions.join(', ')}}`]),
		value,
	);
};
