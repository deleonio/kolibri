import { KolInputPasswordTag } from '../../../core/component-names';
import type { InputPasswordProps } from '@public-ui/schema';
import { executeInputSnapshotTests } from '../../../utils/testing';

import { KolInputPassword } from '../shadow';

executeInputSnapshotTests<InputPasswordProps>(
	KolInputPasswordTag,
	[KolInputPassword],
	{
		_value: 'Value',
	},
	{ hasSmartButton: true },
);
