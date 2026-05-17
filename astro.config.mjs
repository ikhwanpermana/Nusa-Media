import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'server', // Mengaktifkan mode dinamis agar bisa mengambil data dari Supabase
});
