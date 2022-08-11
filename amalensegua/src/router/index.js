import Vue from "vue";
import VueRouter from "vue-router";
import App from "../App.vue";
import Home from "../views/Home.vue";
import InicioSesion from "../views/InicioSesion.vue";
import Amalensegua from "../views/Amalensegua.vue";
import CulturaSorda from "../views/CulturaSorda.vue";
import Contacto from "../views/Contacto.vue";

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
  {
    path: "/amalensegua",
    name: "Amalensegua",
    component: Amalensegua,
  },
  {
    path: "/culturasorda",
    name: "CulturaSorda",
    component: CulturaSorda,
  },
  {
    path: "/contacto",
    name: "Contacto",
    component: Contacto,
  },

];
const router = new VueRouter({
  routes,
});

export default router;
