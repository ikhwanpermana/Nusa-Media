import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import netlify from '@astrojs/netlify';
import vercel from '@astrojs/vercel/serverless'; // ✨ Tambahkan pendeteksi engine Vercel

// 🤖 FUNGSI DETEKSI OTOMATIS LAYANAN HOSTING CLOUD
function tentukanAdapterOtomatis() {
  if (process.env.VERCEL) {
    console.log("🚀 Serverless Engine Mendeteksi: Menggunakan Vercel Adapter");
    return vercel();
  }
  
  console.log("✨ Serverless Engine Mendeteksi: Menggunakan Netlify Adapter");
  return netlify();
}

export default defineConfig({
  output: 'server', // Mempertahankan server rendering untuk Supabase & Admin Panel
  adapter: tentukanAdapterOtomatis(), // Mengaktifkan adapter secara otomatis sesuai platform
  integrations: [tailwind()],
});
