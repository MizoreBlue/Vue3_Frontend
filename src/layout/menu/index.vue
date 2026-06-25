<template>
  <div>
    <template v-for="(item, index) in menuList" :key="item.path">
      <!-- 如果这个路由没有孩子 -->
      <template v-if="!item.children">
        <el-menu-item v-if="!item.meta.hidden" :index="item.path">
          <template #title>
            <el-icon>
              <component :is="item.meta.icon"></component>
            </el-icon>
            <span>{{ item.meta.title }}</span>
          </template>
        </el-menu-item>
      </template>
      <!-- 路由有且仅有一个孩子 -->
      <template v-if="item.children && item.children.length == 1">
        <el-menu-item v-if="!item.hidden" :index="item.children[0].path">
          <template #title>
            <el-icon>
              <component :is="item.children[0].meta.icon"></component>
            </el-icon>
            <span>{{ item.children[0].meta.title }}</span>
          </template>
        </el-menu-item>
      </template>
      <!-- 路由有多个孩子 -->
      <template v-if="item.children && item.children.length > 1">
        <el-sub-menu :index="item.path" v-if="!item.meta.hidden">
          <template #title>
            <el-icon>
              <component :is="item.meta.icon"></component>
            </el-icon>
            <span>{{ item.meta.title }}</span>
          </template>
          <!-- 组件递归 -->
          <Menu :menuList="item.children"></Menu>
        </el-sub-menu>
      </template>
    </template>
  </div>
</template>

<script setup name="Menu">
defineProps(['menuList'])
</script>

<style lang="scss" scoped></style>
