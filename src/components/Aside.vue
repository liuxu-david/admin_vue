<template>
  <div class="aside">
    <div class="header">
      <img src="../assets/logo.svg" alt="" />
      <span>User Operations</span>
    </div>
    <div class="menu">
      <!-- 引入element-plus -->
      <el-menu
        class="el-menu-vertical-demo"
        background-color="none"
        text-color="#fff"
        active-text-color="#ffd04b"
        :collapse-transition="false"
        default-openeds="个人中心"
        router
      >
        <el-sub-menu
          v-for="(item, index) in menuData"
          :index="index + ''"
          :key="item.id"
        >
          <template #title>
            <span>{{ item }}</span>
          </template>
        </el-sub-menu>
      </el-menu>
    </div>
  </div>
</template>

<script setup>
  import { ref } from "vue";
  import { useRouter } from "vue-router";

  const router = useRouter();
  console.log(router.getRoutes());
  const menuData = ["个人中心", "个人帐单", "操作转账"];
</script>

<style lang="less" scoped>
  .aside {
    .header {
      display: flex;
      justify-content: center;
      padding: 15px 0;
      width: 100%;
      overflow: hidden;
      img {
        width: 40px;
        height: 40px;
      }
      span {
        color: #ffffff;
        line-height: 40px;
      }
    }
    .menu {
      color: #ffffff;
      .el-menu {
        border-right: 0;
      }
    }
  }
</style>
