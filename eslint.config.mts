import js from '@eslint/js'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import pluginVue from 'eslint-plugin-vue'
// 1. 引入 Prettier 的插件和配置
import pluginPrettier from 'eslint-plugin-prettier'
import configPrettier from 'eslint-config-prettier'

export default [
  // 1. 忽略文件配置
  {
    ignores: ['dist/**', 'node_modules/**', 'public/**'],
  },

  // 2. JavaScript 基础推荐规则
  js.configs.recommended,

  // 3. TypeScript 推荐规则
  ...tseslint.configs.recommended,

  // 4. Vue 基础规则
  ...pluginVue.configs['flat/essential'],

  // 5. 项目自定义配置 (覆盖前面的规则)
  {
    // 指定生效文件
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,vue}'],

    // 环境变量配置 (对应旧版 env)
    languageOptions: {
      globals: {
        ...globals.browser, // 浏览器环境
        ...globals.node, // Node.js 环境
        // 添加 Vue 3 编译宏，告诉 ESLint 它们是全局只读变量
        defineProps: 'readonly',
        defineEmits: 'readonly',
        defineExpose: 'readonly',
        withDefaults: 'readonly',
      },
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    // 2. 注册 Prettier 插件
    plugins: {
      prettier: pluginPrettier,
    },

    // 规则覆盖 (对应旧版 rules)
    rules: {
      // --- ESLint Core Rules ---
      'no-var': 'error',
      'no-multiple-empty-lines': ['warn', { max: 1 }],
      'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      'no-unexpected-multiline': 'error',
      'no-useless-escape': 'off',

      // --- TypeScript Rules ---
      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/prefer-ts-expect-error': 'error',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/no-namespace': 'off',

      // --- Vue Rules ---
      'vue/multi-word-component-names': 'off',
      'vue/no-mutating-props': 'off',
      'vue/attribute-hyphenation': 'off',

      // 3. 开启 Prettier 规则，将格式问题作为 ESLint 报错提示
      'prettier/prettier': ['error', { endOfLine: 'auto' }],
    },
  },

  // 6. Vue 文件的特殊解析器配置
  {
    files: ['**/*.vue'],
    languageOptions: {
      parserOptions: {
        parser: tseslint.parser,
      },
    },
  },

  // 4. 最后引入 configPrettier，确保关闭所有与 Prettier 冲突的 ESLint 规则
  configPrettier,
]
