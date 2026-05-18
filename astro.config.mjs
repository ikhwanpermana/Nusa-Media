import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/serverless';

export default defineConfig({
  // Mendaftarkan integrasi Tailwind v3 dengan properti content yang benar
  integrations: [
    tailwind({
      applyBaseStyles: false, // Menghindari bentrok style bawaan Astro
      config: {
        content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
      },
    }),
  ],
  
  output: 'server',
  adapter: vercel(),
});
