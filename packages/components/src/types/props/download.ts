import { Generic } from '@a11y-ui/core';

import { watchString } from '../../utils/prop.validators';

/* types */

export type DownloadPropType = string;

/**
 * Tells the browser that the link contains a file. Optionally sets the filename.
 */
export type PropDownload = {
	download?: DownloadPropType;
};

/* validator */
export const validateDownload = (component: Generic.Element.Component, value?: DownloadPropType): void => {
	watchString(component, '_download', value);
};
