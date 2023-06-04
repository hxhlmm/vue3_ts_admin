// 进行axios二次封装：使用请求与响应拦截器
import axios from 'axios'
import { ElMessage } from 'element-plus'
// 1. 利用axios对象的create方法，创建axios实例，好处是可以进行其它配置，如基础路径、超时时间等
let request = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API, // 基础路径：请求基础路径上会携带/api
  timeout: 5000 // 超时时间：请求超出5s不管成功还是失败，都是失败
})
// 2. 请求拦截器：可以在请求拦截器中处理一些业务，如开始进度条、请求头携带公共参数等
request.interceptors.request.use((config) => {
  console.log(config)
  config.headers.token = '123' // 通过请求头给服务器携带参数

  // config配置对象，有headers属性即为请求头，经常给服务器端携带公共参数
  return config // 返回配置对象
})
// 3. 响应拦截器：可以在响应拦截器中处理一些业务，如进度条结束、简化服务器返回的数据、处理http网络错误等
request.interceptors.response.use(
  (response) => {
    console.log(response)

    // 请求成功的回调
    return response.data // 简化数据
  },
  (error) => {
    // 请求失败的回调
    // 处理网络错误
    let message = ''
    let status = error.response.status
    switch (status) {
      case 401:
        message = 'token过期'
        break
      case 403:
        message = '无权访问'
        break
      case 404:
        message = '请求地址错误'
        break
      case 500:
        message = '服务器出现问题'
        break
      default:
        message = '网络出现问题'
    }
    ElMessage({
      // 错误信息提示
      type: 'error',
      message
    })
    return Promise.reject(error)
  }
)

console.log(axios)
console.log(request)

// 对外暴露
export default request
