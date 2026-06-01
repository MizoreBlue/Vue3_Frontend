<template>
  <div class="login_container">
    <el-row>
      <el-col :span="12" :xs="0"></el-col>
      <el-col :span="12" :xs="24">
        <el-form class="login_form">
          <h1>Hello</h1>
          <h2>欢迎来到硅谷甄选</h2>
          <el-form-item>
            <el-input
              placeholder="请输入用户名"
              :prefix-icon="User"
              v-model="loginForm.username"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-input
              placeholder="请输入密码"
              type="password"
              :prefix-icon="Lock"
              v-model="loginForm.password"
              show-password
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button :loading="loading" type="primary" style="width: 100%" @click="login"
              >登录</el-button
            >
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>
<script setup lang="ts" name="Login">
import { User, Lock } from '@element-plus/icons-vue'
import { reactive, ref } from 'vue'
import { ElNotification } from 'element-plus'
import { useRouter } from 'vue-router'
// 引入用户相关的仓库
import useUserStore from '@/store/modules/user'
const userStore = useUserStore()
const $router = useRouter()
let loading = ref(false)
let loginForm = reactive({
  username: 'admin',
  password: '111111',
})

const login = async () => {
  loading.value = true //用于加载效果
  try {
    // 登录成功，promise对象返回成功的结果
    await userStore.userLogin(loginForm)
    // 登录成功，提示用户登录成功
    ElNotification.success({
      type: 'success',
      message: '登录成功',
    })
    // 登录成功，跳转到首页
    $router.push('/')
    loading.value = false //关闭加载效果
  } catch (error) {
    loading.value = false //
    // 登录失败，promise对象返回失败的结果
    ElNotification.error({
      type: 'error',
      // 断言error为Error类型，获取错误信息
      message: (error as Error).message,
    })
  }
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
