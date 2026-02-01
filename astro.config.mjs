import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://lukehartfield.github.io',
  integrations: [tailwind()],
  output: 'static',
});
