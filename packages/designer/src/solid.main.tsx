import { render } from 'solid-js/web';

import { TH } from '@public-oss/kolibri-themes';
import { register } from '@public-ui/components';
import { defineCustomElements } from '@public-ui/components/dist/loader';
import { BAMF, BMF, BZSt, DEFAULT, DESYv1, DESYv2, ECL_EC, ECL_EU, ITZBund, MAPZ, ZOLLv2 } from '@public-ui/themes';

import { AppComponent } from './components/app/component.solid';

register([BAMF, BMF, BZSt, DEFAULT, DESYv1, DESYv2, ECL_EC, ECL_EU, ITZBund, MAPZ, TH, ZOLLv2], defineCustomElements, {
	theme: {
		detect: 'auto',
	},
})
	.then(() => {
		const htmlElement: HTMLElement | null = document.querySelector<HTMLDivElement>('div#app');
		if (htmlElement instanceof HTMLElement) {
			render(() => <AppComponent />, htmlElement);
		}
	})
	.catch(console.warn);
