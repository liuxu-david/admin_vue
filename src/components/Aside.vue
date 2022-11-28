<template>
  <div class="aside">
    <div class="header">
      <img src="../assets/logo.svg" alt="" />
      <span>User Operations</span>
    </div>
    <div class="menu" v-for="(item, index) in menuData" :key="index">
      <div
        :class="['menu-item', { active: activeIndex == index }]"
        @click="handleItemClick(index)"
      >
        {{ item.name }}
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref } from "vue";
  import { useRouter, useRoute } from "vue-router";

  const router = useRouter();
  const route = useRoute();
  const activeIndex = ref(0);
  const menuData = router.getRoutes().slice(0, 3);
  console.log(route);

  const handleItemClick = (index) => {
    router.push(menuData[index].path);
    activeIndex.value = index;
  };
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
      display: flex;
      flex-direction: column;
      padding-top: 10px;
      .menu-item {
        width: 100%;
        height: 55px;
        line-height: 55px;
        cursor: pointer;
      }
      .active {
        color: #ffcd43;
      }
    }
  }
</style>
