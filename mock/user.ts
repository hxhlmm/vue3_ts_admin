// createUserList 此函数执行会返回一个数组，数组里面包含两个用户信息
function createUserList() {
  return [
    {
      userId: 1,
      avatar:
        'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif', // 头像
      username: 'admin',
      password: '12345678',
      desc: '平台管理员',
      roles: ['平台管理员'],
      buttons: ['cuser.detail'], // 按钮权限的一些标识
      routes: ['home'], // 路由权限的一些标识
      token: 'Admin Token'
    },
    {
      userId: 2,
      avatar:
        'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif', // 头像
      username: 'system',
      password: '12345678',
      desc: '系统管理员',
      roles: ['系统管理员'],
      buttons: ['cuser.detail', 'cuser.user'], // 按钮权限的一些标识
      routes: ['home'], // 路由权限的一些标识
      token: 'System Token'
    }
  ]
}

// 对外暴露一个数组，数组里面包含两个接口：1. 登录假的接口 2. 获取用户信息的假的接口
export default [
  // 用户登录
  {
    url: '/api/user/login', // 请求地址
    method: 'post',
    response: ({ body }) => {
      // 获取请求体携带过来的用户名和密码
      const { username, password } = body
      // 调用获取用户信息的函数，用于判断是否有此用户
      const checkUser = createUserList().find(
        (item) => item.username === username && item.password === password
      )
      // 没有此用户则返回失败信息
      if (!checkUser) {
        return { code: 201, data: { message: '账号或者密码不正确' } }
      }
      // 如果有此用户则返回成功信息
      const { token } = checkUser
      return { code: 200, data: { token } }
    }
  },
  // 获取用户信息
  {
    url: '/api/user/info',
    method: 'get',
    response: (request) => {
      // 获取请求头携带的token
      const token = request.headers.token
      // 查看用户信息是否包含此token用户
      const checkUser = createUserList().find((item) => item.token === token)
      // 没有：返回失败的信息
      if (!checkUser) {
        return { code: 201, data: { message: '获取用户信息失败' } }
      }
      // 有：返回成功的信息
      return { code: 200, data: { checkUser } }
    }
  }
]
