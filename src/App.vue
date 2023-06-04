<template>
  <div>
    <h1>App根组件</h1>
    <el-button type="primary" size="default" :icon="Plus">主要按钮</el-button>
    <el-button type="success" size="small" :icon="Edit">编辑按钮</el-button>
    <div>
      <h2>测试svg图标的使用</h2>
      <!-- svg是图标外层容器节点，内部需要与use标签结合使用 -->
      <svg style="width: 100px; height: 50px">
        <!-- xlink:herf 属性制定用哪一个图标，属性值务必 #icon- 加上svg图标名字 -->
        <!-- use标签fill属性可以设置图标的颜色 -->
        <use xlink:href="#icon-code" fill="red"></use>
      </svg>
    </div>
    <div>
      <h2>测试被封装成组件的svg图标</h2>
      <svg-icon name="code"></svg-icon>
      <svg-icon name="code" color="pink"></svg-icon>
      <svg-icon name="code" color="green" width="40px" height="40px"></svg-icon>
    </div>
    <div>
      <Pagination></Pagination>
    </div>
    <h2>测试能否使用sass语法</h2>
    <h2>测试axios的二次封装</h2>
  </div>
</template>

<script setup lang="ts">
// 引入图标组件
// @ts-ignore
import { Edit, Plus } from '@element-plus/icons-vue'
import { reqLogin } from '@/api/user'
import { onMounted } from 'vue'
// 当组件挂载完毕时，测试发一个请求
onMounted(() => {
  reqLogin({
    username: 'admin',
    password: '12345678'
  })
})
</script>

<style scoped lang="scss">
div {
  h1 {
    color: $base_color;
  }

  h2 {
    color: pink;
  }
}
</style>
