import React, { forwardRef } from 'react';

import { Components } from '@public-ui/components';
import { InputDateCases } from './cases';

export const InputDateVariants = forwardRef<HTMLKolInputDateElement, Components.KolInputDate>(function InputDateVariant(props, ref) {
	return (
		<div className="grid md:grid-cols-2 gap-4">
			<fieldset>
				<legend>Date</legend>
				<InputDateCases {...props} />
			</fieldset>
			<fieldset>
				<legend>Date (hideLabel)</legend>
				<InputDateCases ref={ref} {...props} _hideLabel />
			</fieldset>
		</div>
	);
});
