<template>
  <div>
    <el-button type="primary" size="default" :icon="Plus">主要按钮</el-button>
    <el-button type="success" size="small" :icon="Edit">编辑按钮</el-button>
  </div>
</template>

<script setup lang="ts">
// 引入图标组件
import { Edit, Plus } from '@element-plus/icons-vue'
// import { Plus } from '@element-plus/icons-vue'
</script>

<style scoped></style>
