import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'zts-ui',
      fileName: 'zts-ui',
      formats: ['es', 'umd', 'cjs'],
    },
    rollupOptions: {
      external: [
        /@zts-ui.*/,
        'vue',
      ],
    },
  },
});
