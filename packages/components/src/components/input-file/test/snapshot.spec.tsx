import { KolInputFileTag } from '../../../core/component-names';
import type { InputFileProps } from '@public-ui/schema';
import { executeInputSnapshotTests } from '../../../utils/testing';

import { KolInputFile } from '../shadow';

executeInputSnapshotTests<InputFileProps>(KolInputFileTag, [KolInputFile], undefined, { hasSmartButton: true });
