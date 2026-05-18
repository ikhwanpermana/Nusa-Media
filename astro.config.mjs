import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/serverless';

export default defineConfig({
  // Mengaktifkan konfigurasi pencarian class CSS langsung di dalam integrasi Astro
  integrations: [
    tailwind({
      configFile: false, // Beritahu Astro kita tidak pakai file tailwind.config.js terpisah
      config: {
        content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
      },
    }),
  ],
  
  output: 'server',
  adapter: vercel(),
});
