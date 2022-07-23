import Vue from 'vue'
import Router  from 'vue-router'
Vue.use(Router )
import Home from "@/views/Home"
const router = new Router ({
  routes: [
    {
      name:'Home',
      path:"/",
      component:Home
    }
  ]
})
export default router