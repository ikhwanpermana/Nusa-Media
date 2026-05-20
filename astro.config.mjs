<<<<<<< HEAD
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel'; // 1. Tambahkan baris impor ini

export default defineConfig({
  output: 'server', // atau 'hybrid' (biarkan sesuai bawaan proyek Anda)
  adapter: vercel(), // 2. Tambahkan baris adapter ini
});
=======
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// Mode SSR hibrida tanpa memerlukan adapter eksternal untuk pengujian lokal
export default defineConfig({
  output: 'hybrid',
  integrations: [tailwind()],
});
>>>>>>> fe6cb5e7a725fb5086ed37b1ce13eef2f0d0243c
