import React, { FC } from 'react';

import { KolForm, KolTextarea } from '@public-ui/react';

export const TextareaReadOnly: FC = () => (
	<KolForm>
		<KolTextarea _error="Es ist ein Fehler aufgetreten." _id="text" _readOnly _value="Kleiner Text im Eingabefeld ..." _label="Texteingabe" />
	</KolForm>
);
