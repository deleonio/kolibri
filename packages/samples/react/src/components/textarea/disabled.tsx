import React, { FC } from 'react';

import { KolForm, KolTextarea } from '@public-ui/react';

export const TextareaDisabled: FC = () => (
	<KolForm>
		<KolTextarea _disabled _error="Es ist ein Fehler aufgetreten." _id="text" _value="Kleiner Text im Eingabefeld ..." _label="Texteingabe" />
	</KolForm>
);
