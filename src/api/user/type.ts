// 登录接口需要携带参数的类型
export interface LoginForm {
  username: string
  password: string
}

interface dataType {
  token: string
}

// 登录接口返回的数据类型
export interface LoginResponse {
  code: number
  token: dataType
}

// 用户信息接口返回的数据类型
export interface UserInfoResponse {
  code: number
  data: {
    userId: number
    avatar: string
    password: string
    desc: string
    roles: string[]
    buttons: string[]
    routes: string[]
    token: string
  }
}
