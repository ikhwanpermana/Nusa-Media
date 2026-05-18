import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/serverless'; // Mengimpor adapter resmi Vercel

export default defineConfig({
  integrations: [tailwind()],
  output: 'server', // Mengubah output menjadi Server agar mendukung rute dinamis tanpa getStaticPaths
  adapter: vercel(), // Memasang adapter Vercel Serverless
});
