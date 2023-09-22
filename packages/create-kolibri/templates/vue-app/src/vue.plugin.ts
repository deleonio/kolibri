import { Plugin } from 'vue';

import { register } from '@public-ui/components';
import { defineCustomElements } from '@public-ui/components/dist/loader';
import { ITZBund } from '@public-ui/themes';

export const ComponentLibrary: Plugin = {
	install() {
		register(ITZBund, defineCustomElements)
			.then(() => console.log('Components registered'))
			.catch(console.warn);
	},
};
