import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/edge'; // 👈 Perubahan Utama: Gunakan modul edge

// Konfigurasi Nusa Media Modern Edge Hybrid Mode
export default defineConfig({
  output: 'hybrid', 
  adapter: vercel({
    webAnalytics: {
      enabled: true 
    }
  }),
  integrations: [tailwind()],
});
