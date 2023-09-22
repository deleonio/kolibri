import { mixMembers } from 'stencil-awesome-test';

import { getBadgeHtml } from '../../badge/test/html.mock';
import { SpanOptions } from '../../span/test/html.mock';
import { Props } from '../types';

export const getVersionHtml = (props: Props, options?: SpanOptions): string => {
	props = mixMembers(
		{
			_label: '0.0.0-alpha.0',
		},
		props
	);
	return `
<kol-version${options?.additionalAttrs ?? ''}>
  <mock:shadow-root>
    ${getBadgeHtml(
			{
				_color: '#BEC5C9',
				_icon: 'codicon codicon-versions',
				_label: `v${props._label || '0.0.0-alpha.0'}`,
			},
			options
		)}
  </mock:shadow-root>
</kol-version>`;
};
