import { presetMini } from '@unocss/preset-mini';
import { defineConfig } from '@unocss/webpack';

// ts-prune-ignore-next
export default defineConfig({
	presets: [presetMini()],
});
