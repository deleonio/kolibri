import React from 'react';
import { KolIcon } from '@public-ui/react';

import { FC } from 'react';

export const IconBasic: FC = () => (
	<div className="grid gap-4">
		<KolIcon _ariaLabel="" _icons="codicon codicon-home" />
		<KolIcon
			style={{
				color: 'red',
			}}
			_ariaLabel=""
			_icons="codicon codicon-home"
		/>
	</div>
);
