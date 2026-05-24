export default {
  extends: [
    // 1. 基础规则
    'stylelint-config-standard',

    // 2. Vue 相关 (注意顺序：通常放在基础规则后)
    'stylelint-config-html/vue', // 支持 Vue 模板中的内联样式
    'stylelint-config-recommended-vue/scss', // Vue + SCSS 的推荐配置

    // 3. SCSS 语法支持 (注意：必须在 standard 之后，以覆盖其规则)
    'stylelint-config-standard-scss',

    // 4. 格式化与排序
    'stylelint-config-recess-order', // 属性排序
    'stylelint-config-prettier', // 关闭与 Prettier 冲突的规则
  ],
  overrides: [
    {
      // 针对 Vue、HTML、Svelte 等模板文件
      files: ['**/*.{vue,html,svelte}'],
      customSyntax: 'postcss-html',
    },
    {
      // 针对纯 SCSS/Sass/CSS 文件
      files: ['**/*.{scss,sass,css}'],
      customSyntax: 'postcss-scss',
    },
  ],
  ignoreFiles: [
    // 1. 构建产物
    'dist/**/*',
    'build/**/*',

    // 2. 依赖包
    'node_modules/**/*',

    // 3. 其他非样式文件
    '**/*.js',
    '**/*.jsx',
    '**/*.tsx',
    '**/*.ts',
    '**/*.json',
    '**/*.md',
    '**/*.yaml',
  ],
  rules: {
    // --- 通用规则调整 ---
    'value-keyword-case': null, // 允许 Tailwind 或 CSS 变量中的大小写混合
    'no-descending-specificity': null, // Vue 中常需要覆盖组件库样式，关闭此规则避免报错
    'function-url-quotes': 'always', // URL 必须加引号
    'no-empty-source': null, // 允许空文件（Vue 中有时会空着用于占位）

    // --- Vue 3 / Vite 特有调整 ---
    'selector-class-pattern': null, // 关闭 BEM 命名强制要求，Vue 中常用 kebab-case 或任意命名

    // --- 属性与前缀 ---
    'property-no-unknown': null, // 允许 CSS-in-JS 或自定义属性
    'block-opening-brace-space-before': 'always', // 大括号前必须有空格
    'value-no-vendor-prefix': null, // 允许 -webkit-box 等旧前缀（如果需要兼容旧浏览器）
    'property-no-vendor-prefix': null, // 允许 -webkit-mask 等

    // --- SCSS / CSS Modules 特有 ---
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: [
          'global',
          'v-deep',
          'deep',
          'slotted', // Vue 3 透传样式
          'export', // CSS Modules
          'import', // CSS Modules
        ],
      },
    ],
    linebreaks: null,
  },
}
