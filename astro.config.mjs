import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel';

// Konfigurasi resmi Nusa Media untuk Vercel + Supabase
export default defineConfig({
  output: 'hybrid', 
  adapter: vercel({
    webAnalytics: {
      enabled: true 
    }
  }),
  integrations: [tailwind()],
});
