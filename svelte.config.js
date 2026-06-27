import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [
		vitePreprocess(),
		mdsvex({
			extensions: ['.md', '.svx'],
			layout: {
				_: path.resolve(__dirname, 'src/lib/components/MarkdownLayout.svelte'),
			},
		}),
	],
	kit: {
		adapter: adapter(),
		paths: { base: '', assets: '' },
		alias: { '@/*': './src' },
	},
	extensions: ['.svelte', '.svx', '.md'],
};

export default config;
