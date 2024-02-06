import { TouchedPropType } from '../../types/props/touched';

/**
 * Berechnet in Abhängigkeit des Component-State, wie die
 * aria-describedby-Attributs gesetzt werden sollen.
 *
 * @param state State der Component
 * @returns Render-States
 */
export const getRenderStates = (
	state: {
		_error?: string;
		_hideLabel?: boolean;
		_hint?: string;
		_id: string;
		_touched?: TouchedPropType;
	},
	hasExpertSlot: boolean
): {
	hasError: boolean;
	hasHint: boolean;
	ariaDescribedBy: string[];
} => {
	const hasError = typeof state._error === 'string' && state._error.length > 0 && state._touched === true;
	const hasHint = typeof state._hint === 'string' && state._hint.length > 0;

	const ariaDescribedBy: string[] = [];
	if (hasError === true) {
		ariaDescribedBy.push(`${state._id}-error`);
	}
	if (hasHint === true) {
		ariaDescribedBy.push(`${state._id}-hint`);
	}
	if (!hasExpertSlot && !!state._hideLabel) {
		ariaDescribedBy.push(`${state._id}-tooltip`);
	}
	return { hasError, hasHint, ariaDescribedBy };
};
