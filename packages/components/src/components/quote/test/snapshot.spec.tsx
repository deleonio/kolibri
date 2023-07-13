import { executeTests } from 'stencil-awesome-test';

import { h } from '@stencil/core';
import { newSpecPage, SpecPage } from '@stencil/core/testing';

import { COMPONENTS } from '../../component-list';
import { KoliBriQuoteProps } from '../types';
import { getQuoteHtml } from './html.mock';

executeTests<KoliBriQuoteProps>(
	'Quote',
	async (props): Promise<SpecPage> => {
		const page = await newSpecPage({
			components: COMPONENTS,
			template: () => <kol-quote {...props} />,
		});
		return page;
	},
	{
		_caption: ['Caption'],
		_href: ['https://www.example.com'],
		_quote: ['Text of the Quote'],
		_variant: ['block', 'inline'],
	},
	getQuoteHtml
);
