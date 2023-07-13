import { executeTests } from 'stencil-awesome-test';

import { h } from '@stencil/core';
import { newSpecPage, SpecPage } from '@stencil/core/testing';

import { ButtonProps } from '../../../types/button-link';
import { COMPONENTS } from '../../component-list';
import { getButtonHtml } from './html.mock';

executeTests<ButtonProps>(
	'Button',
	async (props): Promise<SpecPage> => {
		const page = await newSpecPage({
			components: COMPONENTS,
			template: () => <kol-button {...props} />,
		});
		return page;
	},
	{
		_label: ['Label'],
	},
	getButtonHtml
);
