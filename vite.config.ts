import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path' // 1. 引入 path 模块
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons' // 2. 引入 SVG 图标插件

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    createSvgIconsPlugin({
      // 指定需要缓存的图标文件夹
      iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
      // 指定symbolId格式
      symbolId: 'icon-[dir]-[name]',
    }),
  ],
  resolve: {
    alias: {
      // 2. 在这里配置别名
      '@': path.resolve(__dirname, './src'),
    },
  },
  //scss全局变量一个配置
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@use "@/styles/variable.scss" as *;',
      },
    },
  },
})
