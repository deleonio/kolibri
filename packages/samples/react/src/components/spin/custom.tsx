import './custom.css';

import React, { FC } from 'react';

import { KolSpin } from '@public-ui/react';

export const SpinCustom: FC = () => (
	<KolSpin _show _variant="none">
		<span slot="expert" className="loader"></span>
	</KolSpin>
);
