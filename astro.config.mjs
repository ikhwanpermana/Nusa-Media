import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import netlify from '@astrojs/netlify';

export default defineConfig({
  output: 'server', // Tetap gunakan server untuk Supabase Auth
  adapter: netlify(),
  integrations: [tailwind()],
});
