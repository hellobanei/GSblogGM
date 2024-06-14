import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/Contact.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Login.vue')
    },
    {
      path: '/signin',
      name: 'signin',
      component: () => import('../views/SignIn.vue')
    },
      
    {
      path: '/tintuc1',
      name: 'tt1',
      component: () => import('../news/tintuc1.vue')

    },
    {
      path: '/tintuc2',
      name: 'tt2',
      component: () => import('../news/tintuc2.vue')

    },
    {
      path: '/tintuc3',
      name: 'tt3',
      component: () => import('../news/tintuc3.vue')

    },
    {
      path: '/tintuc4',
      name: 'tt4',
      component: () => import('../news/tintuc4.vue')

    },
  ]
})

export default router
