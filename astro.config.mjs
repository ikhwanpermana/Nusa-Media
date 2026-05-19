import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/serverless';

export default defineConfig({
  integrations: [tailwind()],
  // 1. Mengaktifkan mode SSR
  output: 'server', 
  // 2. Menggunakan adaptor Vercel agar server berjalan di cloud
  adapter: vercel(),
});
