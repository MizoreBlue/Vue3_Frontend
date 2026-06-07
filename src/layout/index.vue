<template>
  <div class="layout_container">
    <!-- 左侧菜单 -->
    <div class="layout_silder">
      <Logo></Logo>
      <el-scrollbar class="scrollbar">
        <el-menu background-color="#aure" text-color="white">
          <!-- 根据路由动态生成菜单 -->
          <Menu :menuList="userStore.menuRoutes"></Menu>
        </el-menu>
      </el-scrollbar>
    </div>
    <!-- 顶部导航 -->
    <div class="layout_tabbar">456</div>
    <!-- 内容展示区域 -->
    <div class="layout_main">
      <p style="height: 100000px; background-color: red">aa</p>
    </div>
  </div>
</template>

<script setup lang="ts">
// 组件
import Logo from './logo/index.vue'
import Menu from './menu/index.vue'

// 用户仓库
import useUserStore from '@/store/modules/user'
const userStore = useUserStore()
</script>

<style lang="scss" scoped>
.layout_container {
  width: 100%;
  height: 100vh;

  .layout_silder {
    width: $base-menu-width;
    height: 100vh;
    background: $base-menu-background;

    .scrollbar {
      width: 100%;
      height: calc(100vh - $base-menu-logo-height);
      .el-menu {
        border-right: none;
      }
    }
  }

  .layout_tabbar {
    position: fixed;
    top: 0px;
    left: $base-menu-width;
    width: calc(100% - $base-menu-width);
    background: cyan;
    height: $base-tabbar-height;
  }

  .layout_main {
    position: absolute;
    width: calc(100% - $base-menu-width);
    height: calc(100vh - $base-tabbar-height);
    background-color: yellowgreen;
    left: $base-menu-width;
    top: $base-tabbar-height;
    padding: 20px;
    overflow: auto;
  }
}
</style>
