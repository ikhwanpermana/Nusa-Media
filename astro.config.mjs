import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';

// https://astro.build
export default defineConfig({
  output: 'server',
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
    // 🎯 Trik Utama: Memaksa Vercel menggunakan runtime Node 22 secara resmi via Astro
    functionPerRoute: false,
    edgeMiddleware: false,
    runtime: 'nodejs22.x' 
  }),
});
