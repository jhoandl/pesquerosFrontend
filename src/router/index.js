import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import Personal from "../views/Personal.vue";
import Alimentacion from "../views/Alimentacion.vue";
import Oxigenacion from "../views/Oxigenacion.vue";

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
    path: "/Alimentacion",
    name: "Alimentacion",
    component: Alimentacion,
  },
  {
    path: "/Oxigenacion",
    name: "Oxigenacion",
    component: Oxigenacion,
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
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
