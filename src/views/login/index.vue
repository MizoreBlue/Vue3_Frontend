<template>
  <div class="login_container">
    <el-row>
      <el-col :span="12" :xs="0"></el-col>
      <el-col :span="12" :xs="24">
        <el-form class="login_form">
          <h1>Hello</h1>
          <h2>欢迎来到硅谷甄选</h2>
          <el-form-item>
            <el-input placeholder="请输入用户名" :prefix-icon="User" v-model="loginForm.username"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input placeholder="请输入密码" type="password" :prefix-icon="Lock" v-model="loginForm.password"
              show-password></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" style="width: 100%" @click="login">登录</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>
<script setup lang="ts" name="Login">
import { User, Lock } from '@element-plus/icons-vue'
import { reactive } from 'vue'
// 引入用户相关的仓库
import useUserStore from '@/store/modules/user'
const userStore = useUserStore()
let loginForm = reactive({
  username: 'admin',
  password: '111111',
})

const login = async () => {

  let result = await userStore.userLogin(loginForm)
  console.log(result)
}
</script>
<style lang="scss" scoped>
.login_container {
  background: url('@/assets/images/background.jpg') no-repeat;
  background-size: cover;
  width: 100%;
  height: 100vh;

  .login_form {
    background: url('@/assets/images/login_form.png') no-repeat;
    background-size: cover;
    position: relative;
    top: 30vh;
    width: 80%;
    padding: 40px;

    h1 {
      font-size: 40px;
      color: white;
    }

    h2 {
      font-size: 20 px;
      color: white;
      margin: 20px 0;
    }
  }
}
</style>
