import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/add_picture',
    name: 'Add Picture',
    component: () => import('../views/AddPicture.vue')
  },
  {
    path: '/add_tag',
    name: 'Add Tag',
    component: () => import('../views/AddTag.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
