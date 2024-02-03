import React, { FC } from 'react';

import type { KoliBriTableHeaders, KoliBriTablePaginationProps } from '@public-ui/components';
import { KolTable } from '@public-ui/react';
import { DATE_FORMATTER } from '../../shares/formatter';
import { SampleDescription } from '../SampleDescription';
import { DATA, Data } from './test-data';

const HEADERS: KoliBriTableHeaders = {
	horizontal: [
		[
			{ label: 'Order', key: 'order' },
			{ label: 'Date', key: 'date', render: (_el, _cell, tupel) => DATE_FORMATTER.format((tupel as unknown as Data).date) },
		],
	],
};
const PAGINATION: KoliBriTablePaginationProps = { _page: 2 };

export const PaginationPosition: FC = () => (
	<div className="grid gap-14">
		<SampleDescription>Tables with different pagination positions.</SampleDescription>
		<section>
			<h2>Table with pagination at the bottom.</h2>
			<KolTable _label="Tabellenbeschreibung" _data={DATA} _headers={HEADERS} _pagination={PAGINATION} _paginationPosition="bottom"></KolTable>
		</section>
		<section>
			<h2>Table with pagination at the top.</h2>
			<KolTable _label="Tabellenbeschreibung" _data={DATA} _headers={HEADERS} _pagination={PAGINATION} _paginationPosition="top"></KolTable>
		</section>
		<section>
			<h2>Table with pagination at both top and bottom.</h2>
			<KolTable _label="Tabellenbeschreibung" _data={DATA} _headers={HEADERS} _pagination={PAGINATION} _paginationPosition="both"></KolTable>
		</section>
	</div>
);
