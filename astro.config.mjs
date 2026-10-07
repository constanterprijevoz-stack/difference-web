import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://difference-usluge.com.hr',
  integrations: [sitemap()],
  output: 'static',
  build: { format: 'directory' }
});
