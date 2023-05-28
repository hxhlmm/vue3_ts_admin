// @see https://eslint.bootcss.com/docs/rules

module.exports = {
    // 运行环境
    "env": {
        "browser": true, // 项目运行在浏览器端
        "es2021": true,
        "node": true,
        "jest": true
    },
    // 规则继承
    "extends": [
        // 全部规则默认是关闭的，这个配置项开启推荐规则，推荐规则参照文档
        // 比如：函数不能重名，对象不能出现重复key
        "eslint:recommended",
        // Vue3语法规则
        "plugin:vue/vue3-essential",
        // TS语法规则
        "plugin:@typescript-eslint/recommended",
        "plugin:prettier/recommended"
    ],
    // 要为特定类型的文件指定处理器
    "overrides": [
    ],
    // 指定解析器：解析器
    // Esprima 默认解析器
    // Babel-ESLint Babel解析器
    // @typescript-eslint/parser TS解析器
    /* 指定如何解析语法 */
    "parser": "@typescript-eslint/parser",
    // 指定解析器选项
    /* 优先级低于parse的语法解析配置 */
    "parserOptions": {
        "ecmaVersion": "latest", // 校验ECMA最新版本
        "sourceType": "module", // 设置为script（默认），或者module代码在ECMAScript模块中
        "parser": "@typescript-eslint/parser",
        "jsxPragma": "React",
        "ecmaFeatures": {
            "jsx": true
        }
    },
    // ESLint支持使用第三方插件。在使用插件之前必须使用npm安装它
    // 该eslint-plugin-前缀可以从插件名称被省略
    "plugins": [
        "vue",
        "@typescript-eslint"
    ],
    // eslint规则
    /**
     * "off"   或 0  ==>  关闭规则
     * "warn"  或 1  ==>  打开的规则作为警告（不影响代码执行）
     * "error" 或 2  ==>  规则作为一个错误（代码不能执行，界面报错）
     */
    "rules": {
        // eslint（https://eslint.bootcss.com/docs/rules/）
        'no-var': 'error', // 要求使用let或const而不是var
        'no-multiple-empty-lines': ['warn', { max: 1 }], // 不允许多个空行
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-unexpected-multiline': 'error', // 禁止多余的空行
        'no-useless-escape': 'off', // 禁止不必要的转义字符

        // typeScript（https://typescript-eslint.io/rules）
        '@typescript-eslint/no-unused-vars': 'error', // 禁止定义未使用的变量
        '@typescript-eslint/prefer-ts-expect-error': 'error', // 禁止使用@ts-ignore
        '@typescript-eslint/no-explicit-any': 'off', // 禁止使用any类型
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/no-namespace': 'off', // 禁止使用自定义TypeScript模块和命名空间
        '@typescript-eslint/semi': 'off',

        // eslint-plugin-vue (https://eslint.vuejs.org/rules/)
        'vue/multi-word-component-names': 'off', // 要求组件名称始终为-连接的单词
        'vue/script-setup-uses-vars': 'error', // 防止<script setup>使用的变量<template>被标记为未使用
        'vue/no-mutating-props': 'off', // 不允许组件prop的改变
        'vue/attribute-hyphenation': 'off', // 对模板中的自定义组件强制执行属性命名样式
    }
}
