import { App } from 'vue' // 1. 引入 App 类型
import SvgIcon from './SvgIcon/index.vue'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

// 定义一个类型，确保对象里的值都是 Vue 组件
const allGlobalComponents = {
  SvgIcon,
}

export default {
  install(app: App) {
    Object.keys(allGlobalComponents).forEach((key) => {
      app.component(key, allGlobalComponents[key as keyof typeof allGlobalComponents])
    })
    // 将element-plus 图标注册为全局组件
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
      app.component(key, component)
    }
  },
}
