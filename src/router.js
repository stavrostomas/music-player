import Vue from "vue";
import Router from "vue-router";
import Station from "./views/station.vue";
import Home from "./views/home.vue";

Vue.use(Router);

export default new Router({
  base:'music-player',
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/station",
      name: "station",
      component: Station
    }
  ]
});

