// 创建用户相关的仓库
import { defineStore } from 'pinia'
// 导入类型
import type { LoginForm } from '@/api/user/type'
// 定义一个用户相关的仓库，命名为 user
import { LoginAPI } from '@/api/user'
const useUserStore = defineStore('user', {
  // 小仓库存贮数据的地方
  state: () => {
    return {}
  },
  //   异步|逻辑的地方
  actions: {
    // 用户登录的方法
    async userLogin(data: LoginForm) {
      console.log('用户登录了', data)
      const result = await LoginAPI(data)
      console.log('登录接口返回的数据', result)
    },
  },
  // 计算属性的地方
  getters: {},
})

// 导出这个小仓库，供组件使用
export default useUserStore
