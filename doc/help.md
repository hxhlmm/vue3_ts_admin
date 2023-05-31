# 环境准备

node 16.14.2
pnpm 8.0.0

# 本地启动项目

准备好 node 和 pnpm 环境，克隆仓库，依次执行：

```bash
cd project
pnpm install
pnpm run dev
```

package.json 中对于依赖的注释：（因为 json 文件中不允许注释）

```json
"devDependencies": {
    // 该解析器允许使用ESLint校验所有Babel code
    "@babel/eslint-parser": "^7.21.8",
    "@typescript-eslint/eslint-plugin": "^5.59.7",
    "@typescript-eslint/parser": "^5.59.7",
    "@vitejs/plugin-vue": "^4.1.0",
    "eslint": "^8.41.0",
    // 让所有与prettier规则存在冲突的ESLint rules失效，并使用prettier进行代码检查
    "eslint-config-prettier": "^8.8.0",
    "eslint-plugin-import": "^2.27.5",
    "eslint-plugin-node": "^11.1.0",
    // 运行更漂亮的ESLint，使prettier优先级更高，ESLint优先级更低
    "eslint-plugin-prettier": "^4.2.1",
    // Vue.js的ESLint插件：查找Vue语法错误，发现错误指令，查找违规风格指南
    "eslint-plugin-vue": "^9.14.1",
    "typescript": "^5.0.2",
    "vite": "^4.3.2",
    "vue-tsc": "^1.4.2"
  }
```

配置结束，现在当我们填写 `commit` 信息的时候，前面就需要带着下面的 `subject`

```
'feat', // 新特性、新功能
'fix', // 修改bug
'docs', // 文档修改
'style', // 代码格式修改, 注意不是 css 修改
'refactor', // 代码重构
'perf', // 优化相关，比如提升性能、体验
'test', // 测试用例修改
'chore', // 其它修改, 比如改变构建流程、或者增加依赖库、工具等
'revert', // 回滚到上一个版本
'build', // 编译相关的修改，例如发布版本、对项目构建或者依赖的改动
```
