import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'node:path';
// workplace 位置,(import.meta.url)
const workplaceRoot = resolve(process.cwd(), '..');

// https://vitejs.dev/config/
export default defineConfig(() => ({
  build: {
    rollupOptions: {
      input: {
        main: resolve(workplaceRoot, 'demo', 'index.html'),
      },
    },
  },
  resolve: {
    alias: [
      // {
      //   find: /^@zts-ui\/(.*)/,
      //   replacement: resolve(workplaceRoot, 'packages', '$1', 'src')
      // }
    ],
  },
  plugins: [
    vue(),
    // 效果等同于 alias 配置
    {
      name: 'vite-plugin-origin-resource',
      enforce: 'pre',
      async resolveId(source, importer, options) {
        if (source.startsWith('@zts-ui')) {
          const reg = /^@zts-ui\/(.*)/;
          const match = source.match(reg);
          if (match) {
            return resolve(workplaceRoot, 'packages', match[1], 'src', 'index.ts');
          }
        }
      },
    },
  ],
}));
