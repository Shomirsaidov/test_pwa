import { createRouter, createWebHistory } from 'vue-router'
import Entry from '../views/Entry.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Entry
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/reel/667890log',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/finish',
    component: () => import('../views/Finish.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
