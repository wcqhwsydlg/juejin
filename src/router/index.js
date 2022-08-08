import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);
import Home from "@/views/Home";
import Myprofile from "@/views/profile/Myprofile";

const router = new Router({
  routes: [
    {
      name: "Home",
      path: "/",
      component: Home,
    },
    { name: "Myprofile", path: "/myprofile", component: Myprofile },
  ],
});
export default router;
