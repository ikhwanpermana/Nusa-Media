import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/serverless';

// Konfigurasi Terkunci Nusa Media Node 20+ Runtime
export default defineConfig({
  output: 'hybrid', 
  adapter: vercel({
    webAnalytics: {
      enabled: true 
    },
    // FORCE RUNTIME: Mengunci versi serverless agar tidak turun ke Node 18
    init: {
      runtime: 'nodejs20.x'
    }
  }),
  integrations: [tailwind()],
});
