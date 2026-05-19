import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  integrations: [tailwind()],
  adapter: vercel({
    webAnalytics: {
      enabled: true, // <--- Baris ini akan otomatis memasang script Vercel Analytics gratis ke semua halaman Anda
    },
  }),
});
