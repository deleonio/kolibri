import { presetUno } from '@unocss/preset-uno';
import { defineConfig } from '@unocss/webpack';

// ts-prune-ignore-next
export default defineConfig({
	presets: [presetUno()],
});
