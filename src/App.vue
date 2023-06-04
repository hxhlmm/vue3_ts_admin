<template>
  <div>
    <router-view></router-view>
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
