import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel'; // 1. Tambahkan baris impor ini

export default defineConfig({
  output: 'server', // atau 'hybrid' (biarkan sesuai bawaan proyek Anda)
  adapter: vercel(), // 2. Tambahkan baris adapter ini
});
