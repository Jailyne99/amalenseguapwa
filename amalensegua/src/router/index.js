import Vue from "vue";
import VueRouter from "vue-router";
import App from "../App.vue";
import Home from "../views/Home.vue";
import InicioSesion from "../views/InicioSesion.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "app",
    component: App,
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/iniciosesion",
    name: "InicioSesion",
    component: InicioSesion,
  },
];
const router = new VueRouter({
  routes,
});

export default router;
