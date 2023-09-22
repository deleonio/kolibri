import type { Component } from 'vue';
import { createApp } from 'vue';

import App from './components/App.vue';
import { ComponentLibrary } from './vue.plugin';

const htmlDivElement: HTMLDivElement | null = document.querySelector('div#app');
if (htmlDivElement instanceof HTMLDivElement) {
	createApp(App as Component)
		.use(ComponentLibrary)
		.mount(htmlDivElement);
}
