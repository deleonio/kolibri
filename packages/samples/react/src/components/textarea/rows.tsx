import { KolForm, KolTextarea } from '@public-ui/react';
import React from 'react';

import { FC } from 'react';

export const TextareaRows: FC = () => (
	<KolForm>
		<KolTextarea _rows={10} _label="Texteingabe" />
	</KolForm>
);
