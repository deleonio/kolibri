import React, { FC } from 'react';

import { KolForm, KolInputRadio } from '@public-ui/react';

import { ERROR_MSG } from '../../shares/constants';

const options = [
	{ label: 'Frau', value: 'Frau' },
	{ disabled: true, label: 'Herr (disabled)', value: 'Herr' },
	{ label: 'Firma', value: 'Firma' },
];

export const InputRadioSelect: FC = () => (
	<KolForm className="grid gap-4">
		<KolInputRadio _id="anrede-radio" _error={ERROR_MSG} _name="anrede" _options={options} _label="Anrede" />
	</KolForm>
);
