// @ts-check
import { defineConfig, squooshImageService } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  image: {
    service: squooshImageService(),
  },
  vite: {
    plugins: [tailwindcss()]
  }
});
