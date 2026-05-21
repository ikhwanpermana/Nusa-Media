import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/serverless';

export default defineConfig({
  output: 'server', // Mempertahankan server rendering untuk data dinamis Supabase
  adapter: vercel({
    webAnalytics: {
      enabled: true // Otomatis mengaktifkan analisis pengunjung gratis dari Vercel
    }
  }),
  integrations: [tailwind()],
});

