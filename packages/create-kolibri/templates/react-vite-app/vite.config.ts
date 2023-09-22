import UnoCSS from 'unocss/vite';
import { defineConfig } from 'vite';

import react from '@vitejs/plugin-react';

export default defineConfig({
	build: {
		dynamicImportVarsOptions: {
			exclude: [],
		},
	},
	plugins: [react(), UnoCSS()],
});
