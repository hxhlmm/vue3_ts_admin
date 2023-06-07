# 零、Vue3 快速上手

## 1. Vue3 简介

2020.09.18 Vue3 发布，代号：One Piece（海贼王）

## 2. Vue3 带来了什么

### ① 性能的提升

- 打包大小减少 41%
- 初次渲染快 55%，更新渲染快 133%
- 内存减少 54%
- ......

### ② 源码的升级

- 使用 Proxy 代替 defineProperty 实现响应式
- 重写虚拟 DOM 的实现和 Tree-Shaking
- ......

### ③ 拥抱 TypeScript

- Vue3 可以更好的支持 TypeScript

### ④ 新的特性

- Composition API（组合 API）
  - setup 配置
  - ref 与 reactive
  - watch 与 watchEffect
  - provide 与 inject
  - ......
- 新的内置组件
  - Fragment
  - Teleport
  - Suspense
- 其它改变
  - 新的生命周期钩子
  - data 选项应始终被声明为一个函数
  - 移除 keyCode 支持作为 v-on 的修饰符
  - ......

# 一、创建 Vue3.0 工程

## 1. 使用 vue-cli 创建

```bash
## 创建 Vue3.0 工程需确保 @vue/cli 版本在 4.5.0 以上
vue --version
vue -V
## 安装或升级 @vue/cli
npm install -g @vue/cli
## 创建
vue create vue_test
## 启动
cd vue_test
npm run serve
```

### 分析 @vue/cli 创建的 Vue3 项目工程结构

**① 入口文件 src/main.js**

```js
// 引入的不再是 Vue 构造函数了，引入的是一个名为 createApp 的工厂函数
// 构造函数：一般大写开头，需要 new 一下
// 工厂函数：一般小写开头，不需要 new，可以直接调用
import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')
```

```js
// Vue3 写法拆解
// 创建应用实例对象 app（类似于之前 Vue2 中的 vm，但 app 比 vm 更“轻”：没有 vm 那么多属性和方法）
const app = createApp(App)
// 挂载
app.mount('#app')
// 卸载
// app.unmount('#app')
```

```js
// Vue2 写法拆解
const vm = new Vue({
  render: (h) => h(App)
})
vm.$mount('#app')
```

**② App.vue**

Vue3 组件中的模板结构可以没有根标签

## 2. 使用 Vite 创建

官网：[https://cn.vitejs.dev/](https://cn.vitejs.dev/)

中文网：[https://vitejs.cn/](https://vitejs.cn/)

- 什么是 Vite ？ —— 新一代前端构建工具
- 优势如下：
  - 开发环境中，无需打包操作，可快速地冷启动
  - 轻量快速的热重载（HMR hot module replacement）
  - 真正的按需编译，不再等待整个应用编译完成

```bash
## 创建工程
npm init vite-app <project-name>
## 进入工程
cd <project-name>
## 安装依赖
npm install
## 运行
npm run dev
```

# 二、常用 Composition API

## 1. 拉开序幕的 setup

- 理解：Vue3.0 中一个新的配置项，值为一个函数
- setup 是所有 _Composition API（组合式 API）_ **表演的舞台**
- 组件中所用到的：数据、方法等等，均要配置在 setup 中
- setup 函数的两种返回值：
  - **若返回一个对象，则对象中的属性、方法，在模板中均可以直接使用**
  - _若返回一个渲染函数，则可以自定义渲染内容_
- 注意点：
  - 尽量不要与 Vue2.x 配置混用
    - Vue2.x 配置（data、methods、computed ...）中**可以访问到** setup 中的属性、方法
    - 但在 setup 中**不能访问到** Vue2.x 的配置（data、methods、computed ...）
    - 如果有重名，setup 优先
  - setup 不能是一个 async 函数，因为返回值不再是 return 的对象，而是 promise，模板看不到 return 对象中的属性

## 2. ref 函数

- 作用：定义一个响应式的数据
- 语法：`const xxx = ref(initValue)`
  - 创建一个包含响应式数据的**引用对象（reference 对象）**
  - JS 中操作数据：`xxx.value`
  - 模板中读取数据：不需要 value，直接：`<div>{{ xxx }}</div>`
- 备注：
  - 接受的数据可以是：基本类型、对象类型
  - 基本类型的数据：响应式依然靠 `Object.defineProperty()` 的 `getter` 与 `setter` 实现
  - 对象类型的数据：内部***求助***了 Vue3.0 中的一个新函数—— `reactive` 函数

## 3. reactive 函数

- 作用：定义一个**对象类型**的响应式数据（基本类型别用它，用 `ref` 函数）
- 语法：`const 代理对象 = reactive(被代理对象)` 接受一个对象（或数组），返回一个**代理器对象（proxy 对象）**
- `reactive` 定义的响应式数据是**深层次**的
- 内部基于 ES6 的 Proxy 实现，通过代理对象操作源对象内部数据都是响应式的
