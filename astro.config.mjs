import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// Konfigurasi standar Astro yang bersih dan aman untuk Vercel
export default defineConfig({
  integrations: [tailwind()],
});
