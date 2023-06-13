import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/login/Login.vue'
import notFount from '@/views/404/notFount.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: { name: 'login' },
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import('../views/admin/Admin.vue')
    },
    {
      path: '/:catchAll(.*)',
      name: 'notfount',
      component: notFount
    }
  ]
})

export default router
