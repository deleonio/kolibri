import { Generic } from '@a11y-ui/core';

import { Stringified } from '../../types/common';
import { AnyIconFontClass } from '../../types/icon';
import { InputTypeOnDefault } from '../../types/input/types';
import { PropChecked } from '../../types/props/checked';
import { PropIndeterminate } from '../../types/props/indeterminate';
import { PropLabelWithExpertSlot } from '../../types/props/label';
import { InputRequiredProps } from '../input/types';

export type InputCheckboxVariant =
	| 'button'
	| 'checkbox' //deprecated
	| 'default'
	| 'switch';

export type InputCheckboxIcon = {
	checked: AnyIconFontClass;
	indeterminate?: AnyIconFontClass;
	unchecked?: AnyIconFontClass;
} & {
	checked?: AnyIconFontClass;
	indeterminate: AnyIconFontClass;
	unchecked?: AnyIconFontClass;
} & {
	checked?: AnyIconFontClass;
	indeterminate?: AnyIconFontClass;
	unchecked: AnyIconFontClass;
};

type RequiredProps = InputRequiredProps;
type OptionalProps = {
	alert: boolean;
	accessKey: string;
	disabled: boolean;
	error: string;
	hideLabel: boolean;
	hint: string;
	icon: Stringified<InputCheckboxIcon>;
	name: string;
	on: InputTypeOnDefault;
	required: boolean;
	syncValueBySelector: string;
	touched: boolean;
	tabIndex: number;
	/**
	 * @deprecated
	 */
	type: InputCheckboxVariant;
	value: string;
	variant: InputCheckboxVariant;
} & PropChecked &
	PropIndeterminate;
export type Props = Generic.Element.Members<RequiredProps, OptionalProps>;

type RequiredStates = {
	icon: InputCheckboxIcon;
	id: string;
	variant: InputCheckboxVariant;
} & PropChecked &
	PropIndeterminate &
	PropLabelWithExpertSlot;
type OptionalStates = {
	alert: boolean;
	accessKey: string;
	disabled: boolean;
	error: string;
	hideLabel: boolean;
	hint: string;
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
