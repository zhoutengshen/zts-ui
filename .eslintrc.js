const { defineConfig } = require('eslint-define-config');
// module.exports = defineConfig({
//   env: {
//     browser: true,
//     es2023: true,
//     node: true,
//   },
//   root: true,
//   extends: [
//     'airbnb-base',
//     'airbnb-typescript/base',
//     'plugin:vue/vue3-recommended',
//   ],
//   parser: 'vue-eslint-parser',
//   parserOptions: {
//     // @ts-ignore
//     parser: '@typescript-eslint/parser',
//     ecmaVersion: 'latest',
//     sourceType: 'module',
//     project: [
//       './tsconfig.eslint.json',
//     ],
//     // TypeScript 解析器也要负责 vue 文件的 <script>
//     extraFileExtensions: ['.vue'],

//   },
//   ignorePatterns: ['.eslintrc.js'],
//   rules: {
//   },
// });

// require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = defineConfig({
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/eslint-config-airbnb-with-typescript',
  ],
  parserOptions: {
    project: ['./tsconfig.eslint.json'],
  },
  ignorePatterns: ['.eslintrc.js', '**/dist/*', '**/node_modules/*', '**/build/*', '**/*.config.*'],
  rules: {
    "semi": ['error', 'never'],
    "@typescript-eslint/semi": ["error", "never"],
    'import/prefer-default-export': 'off',
    "no-console": process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    // 禁止魔法数字
    // 'no-magic-numbers': 'error',
    "vue/component-name-in-template-casing": ["PascalCase"]
  }
});
