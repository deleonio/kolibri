import React, { FC } from 'react';

import { KolAvatar } from '@public-ui/react';

export const AvatarBasic: FC = () => (
	<div className="flex flex-wrap gap-4">
		<KolAvatar _src="https://www.w3schools.com/howto/img_avatar.png" _label="Elke Mustermann" />
		<KolAvatar _label="Elke Mustermann" />
		<KolAvatar _label="Marianne" />
	</div>
);
