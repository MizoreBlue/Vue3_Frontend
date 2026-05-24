<template>
  <svg :style="{ width, height }">
    <use :xlink:href="`${prefix}${name}`" :fill="color"></use>
  </svg>
</template>

<script setup lang="ts" name="SvgIcon">
defineProps({
  // 可以在这里定义组件的 props, 后面的写法是ts 用于该属性的类型限定和默认值设置
  prefix: {
    type: String,
    default: '#icon-',
  },
  // 提供使用图标的名字
  name: String,
  // 接受父组件传递的颜色
  color: {
    type: String,
    default: '',
  },
  width: {
    type: String,
    default: '16px',
  },
  height: {
    type: String,
    default: '16px',
  },
})
</script>

<style lang="scss" scoped></style>
