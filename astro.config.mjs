import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel';

export default defineConfig({
  integrations: [tailwind()],
  output: 'server',         // Mengubah mode dari statis ke server
  adapter: vercel(),        // Memberitahu Astro untuk menggunakan mesin Vercel
});
