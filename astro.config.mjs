// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  image: {
    service: {
      entry: 'astro/assets/services/noop',
    },
  },
  vite: {
    plugins: [tailwindcss()]
  }
});
