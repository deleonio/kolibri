import { executeTests } from 'stencil-awesome-test';

import { h } from '@stencil/core';
import { newSpecPage, SpecPage } from '@stencil/core/testing';

import { COMPONENTS } from '../../component-list';
import { Props } from '../schema';
import { getFormLoginHtml } from './html.mock';

executeTests<Props>(
	'FormLogin',
	async (props): Promise<SpecPage> => {
		const page = await newSpecPage({
			components: COMPONENTS,
			template: () => <my-form-login {...props} />,
		});
		return page;
	},
	{
		_heading: ['Hello world!'],
	},
	getFormLoginHtml,
	{
		execMode: 'default',
	}
);
