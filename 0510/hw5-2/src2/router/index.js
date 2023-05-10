import Vue from "vue";
import VueRouter from "vue-router";
import LoginForm from "@/components/LoginForm.vue";
import UserView from "../views/UserView.vue";
import UserList from "@/components/user/UserList.vue";
import UserRegist from "@/components/user/UserRegist.vue";
import UserDetail from "@/components/user/UserDetail.vue";

import HomeView from "@/views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/login",
    name: "Login",
    component: LoginForm,
  },
  {
    path: "/user",
    component: UserView,
    children: [
      {
        path: "/regist",
        name: "Regist",
        component: UserRegist,
      },
      {
        path: "/list",
        name: "List",
        component: UserList,
      },
      {
        path: "/detail",
        name: "Detail",
        component: UserDetail,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
