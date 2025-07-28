import { KolAbbrTag } from '../../../core/component-names';
import type { AbbrProps } from '@public-ui/schema';
import { executeSnapshotTests } from '../../../utils/testing';

import { KolAbbr } from '../shadow';

executeSnapshotTests<AbbrProps>(KolAbbrTag, [KolAbbr], [{ _label: 'Text' }]);
