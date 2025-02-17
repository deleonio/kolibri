import React from 'react';
import { KolButton, KolButtonGroup } from '@public-ui/react';

import { FC } from 'react';

export const ButtonGroupBasic: FC = () => (
	<KolButtonGroup>
		<KolButton _label="Active" _variant="primary"></KolButton>
		<KolButton _label="Not active" _disabled></KolButton>
		<KolButton _label="Active" _icons="codicon codicon-home" _variant="danger"></KolButton>
		<KolButton _label="Active" _icons="codicon codicon-trash" _hideLabel _variant="ghost"></KolButton>
	</KolButtonGroup>
);
