import Vue from 'vue'
import VueRouter from 'vue-router'
import Welcome from '../views/Welcome.vue'
import guardian from '../core/Guardian'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/',
    name: 'Welcome',
    component: Welcome,
    beforeEnter: (to, from, next)=> {
      guardian(to, from, next)
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Register.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/mybottle',
    name: 'My Bottle',
    component: () => import('../views/MyBottle.vue'),
    beforeEnter: (to, from, next)=> {
      guardian(to, from, next)
    }
   },
  {
    path: '/alarms',
    name: 'Alarms',
    component: () => import('../views/Alarms.vue'),
    beforeEnter: (to, from, next)=> {
      guardian(to, from, next)
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
