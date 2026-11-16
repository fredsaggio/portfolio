// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  // Usado em URLs canônicas e no sitemap.
  site: 'https://fredsaggio.is-a.dev',
  i18n: {
    locales: ['pt', 'en', 'it'],
    defaultLocale: 'pt',
    routing: { prefixDefaultLocale: false },
  },
});
