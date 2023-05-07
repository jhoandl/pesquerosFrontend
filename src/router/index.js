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
    meta: {
      requiresAuth: true,
      hideNavigation: false,
    },
  },
  {
    path: "/personal",
    name: "personal",
    component: Personal,
    meta: {
      requiresAuth: true,
      hideNavigation: false,
    },
  },
  {
    path: "/login",
    name: "login",
    component: Login,
    meta: {
      requiresAuth: false,
      hideNavigation: true,
    },
  },
  {
    path: "/passwordRecovery",
    name: "passwordRecovery",
    component: RecoveryPassword,
    meta: {
      requiresAuth: false,
      hideNavigation: true,
    },
  },
  {
    path: "/updatePassword",
    name: "updatePassword",
    component: UpdatePassword,
    meta: {
      requiresAuth: false,
      hideNavigation: true,
    },
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

router.beforeEach((to, from, next) => {
  const loggedIn = localStorage.getItem("user");

  if (to.matched.some((record) => record.meta.requiresAuth) && !loggedIn) {
    next("/");
  } else {
    next();
  }
});
