import React, { FC } from 'react';

import { KolIcon } from '@public-ui/react';

export const IconBasic: FC = () => (
	<div className="grid gap-4">
		<KolIcon _ariaLabel="" _icon="codicon codicon-home" />
		<KolIcon
			style={{
				color: 'red',
			}}
			_ariaLabel=""
			_icon="codicon codicon-home"
		/>
	</div>
);
