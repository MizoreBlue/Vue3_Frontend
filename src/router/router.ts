// 对外暴露常量路由
export const constantRoutes = [
  {
    path: '/login',
    name: 'Login', //命名路由
    component: () => import('@/views/login/index.vue'), // 路由懒加载，只有访问/login路径时才会加载这个组件
    meta: {
      title: '登录', //菜单标题
      hidden: true, //是否展示标题
    },
  },
  {
    path: '/',
    name: 'layout',
    component: () => import('@/layout/index.vue'),
    // 用于菜单展示的路由元信息
    meta: {
      title: 'layout',
      hidden: false,
    },
    children: [
      {
        path: '/home',
        component: () => import('@/views/home/index.vue'),
        meta: {
          title: '首页',
          hidden: false,
        },
      },
      {
        path: '/ceshi',
        component: () => import('@/views/home/index.vue'),
        meta: {
          title: '测试',
          hidden: false,
        },
      },
    ],
  },
  {
    path: '/404',
    name: 'NotFound',
    component: () => import('@/views/404/index.vue'),
    meta: {
      title: '404',
      hidden: true,
    },
  },
  {
    path: '/:pathMatch(.*)*', // 匹配所有路径
    redirect: '/404', // 重定向到404页面
    name: 'Any', // 命名路由
    meta: {
      title: '任意路由',
      hidden: true,
    },
  },
]
