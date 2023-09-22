import React, { FC } from 'react';

import { KolForm, KolInputText } from '@public-ui/react';

export const InputTextBlur: FC = () => (
	<KolForm className="grid gap-4">
		<KolInputText
			_on={{
				onBlur: console.log,
			}}
			_type="search"
			_label="Suche"
		/>
	</KolForm>
);
