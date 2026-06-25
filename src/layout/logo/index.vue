<template>
  <div class="logo">
    <img src="../../../public/blackcat.svg" alt="" />
    <p>Mizozre运营平台</p>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped name="Logo">
.logo {
  display: flex;
  padding: 20px;
  width: 100%;
  height: $base-menu-logo-height;
  color: white;
  align-items: center;

  img {
    width: 40px;
    height: 40px;
  }

  p {
    color: white;
    margin-left: 10px;
    font-size: $base-logo-title-fontSize;
  }
}
</style>
