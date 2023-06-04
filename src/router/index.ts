// 通过vue-router插件实现模板路由配置
// 1. 引入vue4版本的createRouter方法
import { createRouter, createWebHashHistory } from 'vue-router'
// 2. 引入常量路由
import { constantRoute } from './routes'
// 3. 创建路由器
let router = createRouter({
  // 路由模式 hash
  history: createWebHashHistory(),
  // 路由
  routes: constantRoute,
  // 滚动行为
  scrollBehavior() {
    return {
      left: 0,
      top: 0
    }
  }
})
// 4. 默认暴露
export default router
