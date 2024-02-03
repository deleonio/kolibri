import React, { FC } from 'react';

import { KoliBriTableHeaders, KoliBriTablePaginationProps } from '@public-ui/components';
import { KolTable } from '@public-ui/react';
import { DATE_FORMATTER } from '../../shares/formatter';
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

export const TableWithPagination: FC = () => (
	<div>
		<KolTable _label="Tabellenbeschreibung" _data={DATA} _headers={HEADERS} _pagination={PAGINATION}></KolTable>
	</div>
);
