import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "@/views/Home.vue";
import Sides from "@/components/Sides.vue";
import Maps from "@/components/Maps.vue";
import Agents from "@/components/Agents.vue";
import { Routes } from "@/types/RouteName";
import Result from "@/components/Result.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    redirect: {name: Routes.maps}
  },
    {
    path: "/home",
    name: Routes.home,
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
      },
      {
        path: "/sides",
        name: Routes.side,
        components: {main: Sides}
      },
      {
        path: "/result",
        name: Routes.result,
        components: {main: Result}
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
