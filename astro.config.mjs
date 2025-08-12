import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// Update `site` to your production URL for correct sitemap and canonical URLs
export default defineConfig({
  site: 'https://example.com',
  integrations: [
    tailwind({
      applyBaseStyles: false
    }),
    sitemap()
  ]
});

