import { render } from 'preact';

import { register } from '@public-ui/components';
import { defineCustomElements } from '@public-ui/components/dist/loader';
import { ITZBund } from '@public-ui/themes';

import { AppComponent } from './components/app/component';

register(ITZBund, defineCustomElements)
	.then(() => {
		const htmlElement: HTMLElement | null = document.querySelector<HTMLDivElement>('div#app');
		if (htmlElement instanceof HTMLElement) {
			render(<AppComponent />, htmlElement);
		}
	})
	.catch(console.warn);
