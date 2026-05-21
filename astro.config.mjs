import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
// import vercel from '@astrojs/vercel/serverless'; // ⏸️ DI-NONAKTIFKAN SEMENTARA

export default defineConfig({
  output: 'static', // ⚙️ Diubah ke statis agar lolos dari error Node.js Vercel
  /* ⏸️ Menonaktifkan sementara adaptor engine serverless Vercel
  adapter: vercel({
    webAnalytics: {
      enabled: true 
    }
  }),
  */
  integrations: [tailwind()],
});
