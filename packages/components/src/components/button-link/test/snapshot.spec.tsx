import { KolButtonLinkTag } from '../../../core/component-names';
import type { ButtonLinkProps } from '@public-ui/schema';
import { executeSnapshotTests } from '../../../utils/testing';

import { KolButtonLink } from '../shadow';

executeSnapshotTests<ButtonLinkProps>(KolButtonLinkTag, [KolButtonLink], [{ _label: 'Beschreibung' }]);
