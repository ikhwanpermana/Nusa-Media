import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// Mode SSR hibrida tanpa memerlukan adapter eksternal untuk pengujian lokal
export default defineConfig({
  output: 'hybrid',
  integrations: [tailwind()],
});
