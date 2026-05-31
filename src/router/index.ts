import { createRouter, createWebHistory } from 'vue-router'
import { constantRoutes } from './router'

// 创建路由器
const router = createRouter({
  history: createWebHistory(),
  routes: constantRoutes,
  scrollBehavior() {
    // 始终滚动到顶部
    return { top: 0 }
  },
})

export default router
