import { fileURLToPath, URL } from 'node:url';
import UnoCSS from 'unocss/vite';
import { defineConfig } from 'vite';

import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
	build: {
		dynamicImportVarsOptions: {
			exclude: []
		}
	},
	plugins: [
		UnoCSS(),
		vue({
			template: {
				compilerOptions: {
					// treat all tags with a dash as custom elements
					isCustomElement: (tag) => tag.startsWith('kol-')
				}
			}
		})
	]
})
