import React, { FC } from 'react';

import { KolCard } from '@public-ui/react';

export const CardBasic: FC = () => (
	<KolCard _heading="Titel" _hasFooter>
		<div slot="header">Zusätzlicher Header</div>
		<div slot="content">Inhalt</div>
		<div slot="footer">Fusszeile</div>
	</KolCard>
);
