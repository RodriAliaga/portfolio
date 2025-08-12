import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// Update `site` to your production URL for correct sitemap and canonical URLs
// Auto-detect base path for GitHub Pages deployments.
// For user/organization pages (repo ends with .github.io), base = '/'.
// For project pages, base = '/<repo>/' so links work under the subpath.
const repo = process.env.GITHUB_REPOSITORY ? process.env.GITHUB_REPOSITORY.split('/')[1] : '';
const isGH = !!process.env.GITHUB_ACTIONS;
const isUserOrOrgPage = repo.endsWith('.github.io');
const base = isGH && repo && !isUserOrOrgPage ? `/${repo}/` : '/';

export default defineConfig({
  site: 'https://example.com',
  base,
  integrations: [
    tailwind({
      applyBaseStyles: false
    }),
    sitemap()
  ]
});
