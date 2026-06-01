// 创建用户相关的仓库
import { defineStore } from 'pinia'
// 导入类型
import type { LoginForm } from '@/api/user/type'
// 定义一个用户相关的仓库，命名为 user
import { LoginAPI } from '@/api/user'
const useUserStore = defineStore('user', {
  // 小仓库存贮数据的地方
  state: () => {
    return {
      token: localStorage.getItem('token') || '', //用户唯一标识
    }
  },
  //   异步|逻辑的地方
  actions: {
    // 用户登录的方法
    async userLogin(data: LoginForm) {
      // 登录请求
      const result: any = await LoginAPI(data)
      // 登录请求成功
      if (result.code === 200) {
        // 设置store
        this.token = result.data.token
        // 将 token 存储到 localStorage 中，以便在页面刷新后仍然可以保持登录状态
        localStorage.setItem('token', result.data.token)
        return 'ok'
      } else {
        // 登录失败，返回失败的Promise对象
        return Promise.reject(new Error(result.data.message))
      }
    },
  },
  // 计算属性的地方
  getters: {},
})

// 导出这个小仓库，供组件使用
export default useUserStore
