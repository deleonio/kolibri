import React, { FC } from 'react';

import { KolProgress } from '@public-ui/react';

export const ProgressBasic: FC = () => (
	<div className="grid gap-4">
		<KolProgress _variant="bar" _max={100} _value={33}></KolProgress>
		<KolProgress _variant="cycle" _max={100} _value={33}></KolProgress>
	</div>
);
