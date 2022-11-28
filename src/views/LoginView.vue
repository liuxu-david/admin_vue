<template>
  <div class="login-page">
    <div class="login-panel">
      <div class="login-header">
        <el-image :src="url" :fit="contain" />
        <div class="title">中国银行</div>
      </div>
      <pwd-login></pwd-login>
    </div>
  </div>
</template>

<script setup>
  import PwdLogin from "@/components/PwdLogin.vue";
  // 定义登录页面的头像图片
  const url = new URL("@/assets/login.jpg", import.meta.url).href;
</script>

<style lang="less" scoped>
  .login-page {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    // background-color: #6262cf;
    background: linear-gradient(#56b6c2, #6262cf 40%);
    .login-panel {
      flex-direction: column;
      width: 300px;
      height: 50vh;
      .login-header {
        .el-image {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background-color: #fff;
        }
        .title {
          font-size: 25px;
          margin: 10px 0;
        }
      }
      .tab-bar {
        display: flex;
        height: 35px;
        background-color: rgba(0, 0, 0, 0.3);
        margin: 10px 0;
        border-radius: 5px;
      }
    }
  }
</style>
