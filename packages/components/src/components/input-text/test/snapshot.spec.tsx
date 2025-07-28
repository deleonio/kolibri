import { KolInputTextTag } from '../../../core/component-names';
import type { InputTextProps } from '@public-ui/schema';
import { executeInputSnapshotTests } from '../../../utils/testing';

import { KolInputText } from '../shadow';

executeInputSnapshotTests<InputTextProps>(
	KolInputTextTag,
	[KolInputText],
	{
		_spellCheck: true,
		_value: 'Value',
	},
	{ hasSmartButton: true },
);
