<template>
  <!-- svg是图标外层容器节点，内部需要与use标签结合使用 -->
  <svg :style="{ width, height }">
    <!-- xlink:herf 属性制定用哪一个图标，属性值务必 #icon- 加上svg图标名字 -->
    <!-- use标签fill属性可以设置图标的颜色 -->
    <use :xlink:href="prefix + name" :fill="color"></use>
  </svg>
</template>

<script setup lang="ts">
// 接收父组件传递过来的参数
defineProps({
  // xlink:href 属性值前缀
  prefix: {
    type: String,
    default: '#icon-'
  },
  // 提供使用的图标的名字
  name: String,
  // 颜色
  color: {
    type: String,
    default: ''
  },
  // 宽度
  width: {
    type: String,
    default: '16px'
  },
  // 高度
  height: {
    type: String,
    default: '16px'
  }
})
</script>

<style scoped></style>
