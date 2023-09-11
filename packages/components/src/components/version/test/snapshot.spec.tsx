import { executeTests } from 'stencil-awesome-test';

import { h } from '@stencil/core';
import { newSpecPage, SpecPage } from '@stencil/core/testing';

import { COMPONENTS } from '../../component-list';
import { Props } from '../types';
import { getVersionHtml } from './html.mock';

executeTests<Props>(
	'Version',
	async (props): Promise<SpecPage> => {
		const page = await newSpecPage({
			components: COMPONENTS,
			template: () => <kol-version {...props} />,
		});
		return page;
	},
	{
		_label: [undefined, '1.0.0'],
	},
	(props) => getVersionHtml(props),
	{
		execMode: 'default', // ready
	}
);
