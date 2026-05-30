// 声明 CSS/SCSS 模块，告诉 TS 这些是样式文件
declare module '*.css'
declare module '*.scss'
declare module '*.sass'
declare module '*.less'

// 声明 Vite 的虚拟模块（针对你的 SVG 插件）
declare module 'virtual:svg-icons-register'
/// <reference types="vite/client" />
