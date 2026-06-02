import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://austincopps.com',
  trailingSlash: 'never',
  build: {
    format: 'file',
  },
  integrations: [tailwind({ applyBaseStyles: false })],
});
