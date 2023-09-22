import React, { FC } from 'react';

import { KolForm, KolTextarea } from '@public-ui/react';

export const TextareaRows: FC = () => (
	<KolForm>
		<KolTextarea _id="text" _rows={10} _label="Texteingabe" />
	</KolForm>
);
