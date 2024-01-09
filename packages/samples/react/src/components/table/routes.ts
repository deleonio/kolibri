import { Routes } from '../../shares/types';

import { TableBadgeSize } from './badge-size';
import { TableRenderCell } from './render-cell';
import { TableSortData } from './sort-date';
import { TableWithPagination } from './with-pagination';
import { TableColumnAlignment } from './column-alignment';

export const TABLE_ROUTES: Routes = {
	table: {
		'badge-size': TableBadgeSize,
		'column-alignment': TableColumnAlignment,
		'render-cell': TableRenderCell,
		'sort-data': TableSortData,
		'with-pagination': TableWithPagination,
	},
};
