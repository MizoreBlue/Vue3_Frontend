// 对外暴露常量路由
export const constantRoutes = [
  {
    path: '/login',
    name: 'Login', //命名路由
    component: () => import('@/views/login/index.vue'), // 路由懒加载，只有访问/login路径时才会加载这个组件
  },
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/home/index.vue'),
  },
  {
    path: '/404',
    name: 'NotFound',
    component: () => import('@/views/404/index.vue'),
  },
  {
    path: '/:pathMatch(.*)*', // 匹配所有路径
    redirect: '/404', // 重定向到404页面
    name: 'Any', // 命名路由
  },
]
