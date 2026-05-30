// 统一管理用户相关的接口
import request from '@/utils/request'
// 引入类型
import { LoginForm, LoginResponse, UserInfoResponse } from './type'

enum API {
  LOGIN_URL = '/user/login',
  LOGOUT_URL = '/user/logout',
  INFO_URL = '/user/info',
}

// 暴露请求函数
// 登录接口
export const LoginAPI = (data: LoginForm) => request.post<LoginResponse>(API.LOGIN_URL, data)
// 退出登录接口
export const LogoutAPI = () => request.post(API.LOGOUT_URL)
// 获取用户信息接口
export const GetInfoAPI = () => request.get<UserInfoResponse>(API.INFO_URL)
