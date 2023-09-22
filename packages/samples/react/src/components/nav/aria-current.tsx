import React, { FC } from 'react';

import { KolNav } from '@public-ui/react';

export const NavAriaCurrent: FC = () => (
	<KolNav
		_ariaLabel="Main navigation"
		_links={[
			{
				_label: 'Homepage',
				_href: '#/',
			},
			{
				_label: '2 Navigation point',
				_href: '#/untermenu',
				_active: true,
			},
		]}
		_ariaCurrentValue="page"
	/>
);
