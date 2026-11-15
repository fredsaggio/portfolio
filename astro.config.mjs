// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  // Quando tiver domínio, preencha `site` (usado em URLs canônicas e no sitemap).
  // site: 'https://seudominio.dev',
  i18n: {
    locales: ['pt', 'en', 'it'],
    defaultLocale: 'pt',
    routing: { prefixDefaultLocale: false },
  },
});
