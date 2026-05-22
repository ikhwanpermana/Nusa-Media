import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/serverless'; // 👈 KUNCI: Tambahkan /serverless secara eksplisit

// Konfigurasi Nusa Media Terverifikasi Mode Hibrida
export default defineConfig({
  output: 'hybrid', 
  adapter: vercel({
    webAnalytics: {
      enabled: true 
    }
  }),
  integrations: [tailwind()],
});
