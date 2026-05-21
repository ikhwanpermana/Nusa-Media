import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel'; // Gunakan paket vercel standar terbaru

// https://astro.build
export default defineConfig({
  // Kita gunakan mode 'hybrid' agar halaman beranda Anda tetap statis (cepat), 
  // tetapi halaman admin rahasia bisa berjalan secara dinamis di server Vercel.
  output: 'hybrid', 
  
  adapter: vercel({
    webAnalytics: {
      enabled: true 
    }
  }),
  integrations: [tailwind()],
});
