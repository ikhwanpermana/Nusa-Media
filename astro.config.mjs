import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/serverless'; // Wajib diimpor

export default defineConfig({
  // Menghubungkan Tailwind CSS agar utility class berfungsi
  integrations: [tailwind()],
  
  // Mengaktifkan adapter Vercel Serverless agar fungsi database SSR berjalan
  output: 'server',
  adapter: vercel(),
});
