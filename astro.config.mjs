import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://hghuu2211-debug.github.io',
  base: '/vibe-coding',
  integrations: [tailwind()],
});
