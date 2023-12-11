import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
export default defineConfig({
  build: {
    lib: {
      entry: {
        'zts-button': 'src/index.ts',
      },
      formats: ['umd', 'es', 'cjs'],
      name: 'ZtsButton',
      fileName: 'zts-button'
    },
    rollupOptions: {
      external: [
        'vue',
        /@zts-ui.*/,
      ],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  },
  plugins: [
    vue(),
  ]
})