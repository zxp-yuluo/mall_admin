import { createRouter, createWebHistory } from 'vue-router'
import LoginView from "../views/login/LoginView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginView
    },
    {
      path: '/admin',
      name: 'admin',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/admin/AdminView.vue')
    },
    {
      path: "/:error*",
      name: "notFaont",
      component: () => import('../views/notFount/NotFountView.vue')
    }
    // {
    //   path: '/:catchAll(.*)',
    //   name: 'notfount',
    //   component: () => import('../views/notFount/NotFountView.vue')
    // }
  ]
})

export default router
