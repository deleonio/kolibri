import { Props as ButtonProps } from '../../../components/button/types';
import { Stringified } from '../../common';
import { KoliBriHorizontalIcons } from '../../icons';
import { InputTypeOnDefault, InputTypeOnOff } from '../types';

export type InputDateType = 'date' | 'datetime-local' | 'month' | 'time' | 'week';
export type InputNumberType = 'number' | InputDateType;

export type OptionalInputProps<T> = {
	accessKey: string;
	alert: boolean;
	autoComplete: InputTypeOnOff;
	disabled: boolean;
	error: string;
	hideLabel: boolean;
	hint: string;
	icons: Stringified<KoliBriHorizontalIcons>;
	max: T;
	min: T;
	name: string;
	on: InputTypeOnDefault;
	readOnly: boolean;
	required: boolean;
	smartButton: Stringified<ButtonProps>;
	step: number;
	tabIndex: number;
	touched: boolean;
	value: T | null;
};
