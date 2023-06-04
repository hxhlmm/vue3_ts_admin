// 统一管理项目中用户相关的接口
// 1. 引入request
import request from '@/utils/request'
// 2. 引入ts类型
import type { loginForm, loginResponseData, userResponseData } from './type'
// 3. 枚举接口地址
enum API {
  LOGIN_URL = '/user/login',
  USERINFO_URL = '/user/info'
}
// 4. 暴露请求函数
export const reqLogin = (data: loginForm) =>
  request.post<any, loginResponseData>(API.LOGIN_URL, data) // 登录接口方法
export const reqUserInfo = () =>
  request.get<any, userResponseData>(API.USERINFO_URL) // 获取用户信息接口方法
