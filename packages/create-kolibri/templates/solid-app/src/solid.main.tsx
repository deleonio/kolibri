import { render } from 'solid-js/web';

import { register } from '@public-ui/components';
import { defineCustomElements } from '@public-ui/components/dist/loader';
import { ITZBund } from '@public-ui/themes';

import { AppComponent } from './components/app/component';

register(ITZBund, defineCustomElements)
	.then(() => {
		const htmlDivElement: HTMLDivElement | null = document.querySelector('div#app');
		if (htmlDivElement instanceof HTMLDivElement) {
			render(() => <AppComponent />, htmlDivElement);
		}
	})
	.catch(console.warn);
