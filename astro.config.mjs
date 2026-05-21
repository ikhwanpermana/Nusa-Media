import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/serverless'; // Gunakan modul serverless eksplisit

// Konfigurasi Nusa Media Hybrid Mode
export default defineConfig({
  output: 'hybrid', 
  adapter: vercel({
    webAnalytics: {
      enabled: true 
    }
  }),
  integrations: [tailwind()],
});
