import { executeTests } from 'stencil-awesome-test';

import { h } from '@stencil/core';
import { newSpecPage, SpecPage } from '@stencil/core/testing';

import { COMPONENTS } from '../../component-list';
import { Props } from '../types';
import { getAvatarHtml } from './html.mock';

executeTests<Props>(
	'Avatar',
	async (props): Promise<SpecPage> => {
		const page = await newSpecPage({
			components: COMPONENTS,
			template: () => <kol-avatar {...props} />,
		});
		return page;
	},
	{
		_label: ['Erika Maria Mustermann', `Erika`],
		_src: [`/example-image.jpg`],
	},
	getAvatarHtml,
);
