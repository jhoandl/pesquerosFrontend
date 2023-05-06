import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import Login from "../views/Login.vue";
import RecoveryPassword from "../views/RecoveryPassword.vue";
import UpdatePassword from "../views/UpdatePassword.vue";
import Personal from "../views/Personal.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/home",
    name: "home",
    component: HomeView,
  },
  {
    path: "/personal",
    name: "personal",
    component: Personal,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/passwordRecovery",
    name: "passwordRecovery",
    component: RecoveryPassword,
  },
  {
    path: "/updatePassword",
    name: "updatePassword",
    component: UpdatePassword,
  },
  {
    path: "/",
    redirect: "/login",
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
