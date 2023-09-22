import React, { FC } from 'react';

import { KolForm, KolInputRange } from '@public-ui/react';

import { ERROR_MSG } from '../../shares/constants';

export const InputRangeBasic: FC = () => (
	<KolForm className="grid gap-4">
		<KolInputRange
			_id="range"
			_min={0}
			_max={50}
			_name="range"
			_error={ERROR_MSG}
			_label="Schieberegler"
			_icon={{
				left: {
					icon: 'codicon codicon-arrow-left',
				},
				right: {
					icon: 'codicon codicon-arrow-right',
				},
			}}
		/>
		<KolInputRange _id="range" _min={0} _max={50} _step={10} _error={ERROR_MSG} _label="Schieberegler" />
		<KolInputRange _disabled _id="range" _min={0} _max={50} _label="Schieberegler" />
	</KolForm>
);
