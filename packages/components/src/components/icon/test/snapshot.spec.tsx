import { executeTests } from 'stencil-awesome-test';

import { h } from '@stencil/core';
import { newSpecPage, SpecPage } from '@stencil/core/testing';

import { COMPONENTS } from '../../component-list';
import { Props } from '../types';
import { getIconHtml } from './html.mock';
import { KolIconTag } from '../../../core/component-names';

executeTests<Props>(
	'Icon',
	async (props): Promise<SpecPage> => {
		const page = await newSpecPage({
			components: COMPONENTS,
			template: () => <KolIconTag {...props} />,
		});
		return page;
	},
	{
		_label: ['Aria-Label'],
		_icons: ['codicon codicon-home'],
	},
	getIconHtml,
	{
		execMode: 'default', // ready
	},
);
