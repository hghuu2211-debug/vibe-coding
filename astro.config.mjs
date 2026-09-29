import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://hghuu2211-debug.github.io',
  base: process.env.GITHUB_ACTIONS === 'true' ? '/vibe-coding' : '/',
  integrations: [tailwind()],
});
