import { executeTests } from 'stencil-awesome-test';

import { h } from '@stencil/core';
import { newSpecPage, SpecPage } from '@stencil/core/testing';

import { COMPONENTS } from '../../component-list';
import { Props } from '../types';
import { getSpanHtml, getSpanWcHtml } from './html.mock';

executeTests<Props>(
	'SpanWc',
	async (props): Promise<SpecPage> => {
		const page = await newSpecPage({
			components: COMPONENTS,
			template: () => <kol-span-wc {...props} />,
		});
		return page;
	},
	{
		_icons: ['codicon codicon-home'],
		_hideLabel: [true, false],
		_label: ['Text', ''],
	},
	getSpanWcHtml,
	{
		execMode: 'default', // ready
	}
);

executeTests<Props>(
	'Span',
	async (props): Promise<SpecPage> => {
		const page = await newSpecPage({
			components: COMPONENTS,
			template: () => <kol-span {...props} />,
		});
		return page;
	},
	{
		_icons: ['codicon codicon-home'],
		_hideLabel: [true, false],
		_label: ['Text', ''],
	},
	getSpanHtml,
	{
		execMode: 'default', // ready
	}
);
