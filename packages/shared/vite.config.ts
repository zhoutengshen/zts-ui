import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      // iife 和 umd 格式，挂载到全局变量的名称
      name: 'ZtsShared',
      entry: 'src/index.ts',
      formats: ['es', 'cjs', 'umd'],
      // 产物名称
      fileName: 'zts-shared',
    },
    outDir: 'dist',
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: [],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {},
      },
    },
    // TODO: 学习阶段不混淆代码
    minify: false,
  },
});
