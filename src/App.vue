<template>
  <div class="box">我是app{{ msg }}</div>
  <el-button type="primary">Element Plus Button</el-button>
  <svg-icon name="phone" color="pink" width="24px" height="24px"></svg-icon>
</template>
<script setup lang="ts" name="App">
const msg = 'Hello Vue 3 with TypeScript!'
// 引入图标组件
</script>

<style scoped lang="scss">
.box {
  width: 100px;
  height: 100px;
  background-color: red;
}
</style>
