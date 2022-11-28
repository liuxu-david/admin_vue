<template>
  <div class="login-form">
    <el-form
      ref="loginForm"
      :model="loginFormData"
      style="max-width: 400px"
      :rules="rules"
      status-icon
    >
      <el-form-item prop="username">
        <el-input v-model="loginFormData.username" placeholder="请输入用户名">
          <template #prefix>
            <el-icon class="el-input__icon"><User /></el-icon>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          v-model="loginFormData.password"
          placeholder="请输入密码"
          type="password"
        >
          <template #prefix>
            <el-icon class="el-input__icon"><Lock /></el-icon>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item class="check-line">
        <div class="check-item">
          <el-checkbox
            v-model="loginFormData.remeberUserName"
            label="普通用户"
          />
        </div>
        <div class="check-item">
          <el-checkbox v-model="loginFormData.remeberPassword" label="管理员" />
        </div>
        <div class="check-item register" @click="handleRegisterClick">
          用户注册
        </div>
      </el-form-item>
      <el-form-item>
        <el-button type="danger" @click="handleSubmitClick">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup>
  import { ref } from "vue";
  import { useRouter } from "vue-router";
  import { loginRules } from "@/utils/loginRules";
  import loginDataUtils from "@/utils/loginData";
  import { getLoginData } from "@/service/login";

  const loginForm = ref(null);
  const loginFormData = ref({
    username: "",
    password: "",
    remeberUserName: false,
    remeberPassword: false,
  });
  const rules = ref(loginRules);
  const router = useRouter();
  // const loginStore = useLoginStore();

  // 表单提交事件
  const handleSubmitClick = () => {
    loginForm.value.validate((valid) => {
      if (!valid) return;
      // 表单校验成功，调用登录接口
      loginDataUtils.setLoginData("username", loginFormData.value.username);
      //   loginDataUtils.setLoginData("password", loginFormData.value.password);
      // 调用登录接口，跳转到主页
      getLoginData(loginFormData.value.username, loginFormData.value.password)
        .then((res) => {
          console.log(res);
          if (res.data.code == 200) {
            const { id, token, msg } = res.data;
            console.log(token);
            loginDataUtils.setLoginData("token", token);
            // loginStore.getTokenAction(token);
            // loginStore.getMenuAction(id);
            router.push("/usermain");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    });
  };
  // 提交登录页面
  const handleRegisterClick = () => {
    router.push("/register");
  };
</script>

<style lang="less" scoped>
  .login-form {
    .el-input {
      height: 35px;
    }
    .el-button {
      width: 100%;
      height: 35px;
    }
    .el-checkbox {
      color: #fff;
    }
    .check-line {
      display: flex;
      height: 30px;
      width: 100%;
      align-content: center;
      justify-content: space-between;
      .check-item {
        flex: 1;
      }
      .register {
        color: #ffffff;
        cursor: pointer;
      }
    }
    .el-input__icon {
      font-size: 18px;
      color: #000;
    }
  }
</style>
