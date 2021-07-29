import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import("../views/home.vue")

Vue.use(VueRouter)

const routes = [
  {
    path: "/home",
    component: Home,
  },
  {
    path: "/",
    redirect: "/home"
  }
]

const router = new VueRouter({
  mode: "hash",
  routes
})

export default router