import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
	integrations: [tailwind()],
	// Define your routes here
	routes: [
		{ path: '/', component: './src/pages/index.astro' },
		{ path: '/about', component: './src/pages/about.astro' },
		{ path: '/videos/:id', component: './src/pages/video.astro' },
	  ],
});
