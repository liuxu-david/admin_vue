import { createRouter, createWebHistory } from "vue-router";
import LoginView from "../views/LoginView.vue";

const routes = [
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/login",
    name: "登录",
    component: LoginView,
  },
  {
    path: "/register",
    name: "注册",
    component: import("@/views/Register.vue"),
  },
  {
    path: "/usermain",
    redirect: "/usermain/profile",
    component: import("@/views/userMain/index.vue"),
    children: [
      {
        path: "profile",
        name: "个人中心",
        component: import("@/views/userMain/profile.vue"),
      },
      {
        path: "bill",
        name: "个人账单",
        component: import("@/views/userMain/transfer.vue"),
      },
      {
        path: "transfer",
        name: "操作转账",
        component: import("@/views/userMain/transfer.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// 添加路由守卫

export default router;
