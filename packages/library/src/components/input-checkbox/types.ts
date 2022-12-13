import { Generic } from '@public-ui/core';
import { InputTypeOnDefault } from '../../types/input/types';
import { InputRequiredProps } from '../input-text/types';

export type InputCheckboxVariant = 'checkbox' | 'switch';

/**
 * API
 */
type RequiredProps = InputRequiredProps;
type OptionalProps = {
	alert: boolean;
	accessKey: string;
	checked: boolean;
	disabled: boolean;
	error: string;
	hideLabel: boolean;
	hint: string;
	indeterminate: boolean;
	name: string;
	on: InputTypeOnDefault;
	required: boolean;
	touched: boolean;
	tabIndex: number;
	/**
	 * @deprecated
	 */
	type: InputCheckboxVariant;
	value: string;
	variant: InputCheckboxVariant;
};
export type Props = Generic.Element.Members<RequiredProps, OptionalProps>;

type RequiredStates = {
	checked: boolean;
	id: string;
	variant: InputCheckboxVariant;
};
type OptionalStates = {
	alert: boolean;
	accessKey: string;
	disabled: boolean;
	error: string;
	hideLabel: boolean;
	hint: string;
	indeterminate: boolean;
	name: string;
	on: InputTypeOnDefault;
	required: boolean;
	touched: boolean;
	tabIndex: number;
	value: string;
};

export type States = Generic.Element.Members<RequiredStates, OptionalStates>;

export type Watches = Generic.Element.Watchers<RequiredProps, OptionalProps>;

export type ComponentApi = Generic.Element.ComponentApi<RequiredProps, OptionalProps, RequiredStates, OptionalStates>;
