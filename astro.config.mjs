import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/serverless';

import cloudflare from "@astrojs/cloudflare";

// Konfigurasi Terkunci Nusa Media Node 20+ Runtime
export default defineConfig({
  output: "hybrid", 
  adapter: cloudflare(),
  integrations: [tailwind({
    // 🔥 PERBAIKAN MUTLAK: Memberitahu Astro agar tidak menyuntikkan gaya Tailwind bawaan kosong, 
    // melainkan dipaksa menggunakan aturan dari file global.css milik Anda.
    applyBaseStyles: false 
  })],
});