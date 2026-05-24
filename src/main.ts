import { createApp } from 'vue'
import App from '@/App.vue'

// 引入 Element Plus 组件库和样式
import 'element-plus/theme-chalk/index.css'
import ElementPlus from 'element-plus'
// 有可能会打包失败，
import { zhCn } from 'element-plus/es/locale/index.mjs'

import 'virtual:svg-icons-register' // 引入 SVG 图标注册脚本

const app = createApp(App)
app.use(ElementPlus, { locale: zhCn }) // 设置 Element Plus 的语言为中文

// 导入自定义插件 用于注册全局组件
import globalComponents from '@/components'
// 调用这行代码时，回去执行 globalComponents 插件对象的 install 方法，安装全局组件
app.use(globalComponents)

// 引入模板的全局样式
import '@/styles/index.scss'

app.mount('#app')
