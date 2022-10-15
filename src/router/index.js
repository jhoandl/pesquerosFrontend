import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Dashboard from "../views/Dashboard.vue";
import Usuarios from "../views/Usuarios.vue";
import Roles from "../views/Roles.vue";
import Oxigenacion from "../views/Oxigenacion.vue";
import Alimentacion from "../views/Alimentacion.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/home",
    name: "Dashboard",
    component: Dashboard,
    children: [
      {
        path: "/home",
        name: "Inicio",
        component: Home,
      },
      {
        path: "/users",
        name: "Usuarios",
        component: Usuarios,
      },
      {
        path: "/roles",
        name: "Roles",
        component: Roles,
      },
      {
        path: "/oxigeno",
        name: "Oxigenacion",
        component: Oxigenacion,
      },
      {
        path: "/food",
        name: "Alimentacion",
        component: Alimentacion,
      },
    ]
  },
  {
    path: "/",
    redirect: '/home',
  },
];

const router = new VueRouter({
  routes,
});

export default router;
