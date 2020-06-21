import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "@/views/Home.vue";
import Maps from "@/components/Maps.vue";
import Agents from "@/components/Agents.vue";
import { Routes } from "@/types/RouteName";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    redirect: {name: Routes.maps}
  },
    {
    path: "/home",
    name: "Home",
    component: Home,
    children: [
      {
        path: "/maps",
        name: Routes.maps,
        components: { main: Maps }
      },
      {
        path: "/agents",
        name: Routes.agents,
        components: { main: Agents}
      }
    ]
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
