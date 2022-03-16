import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/introduce'
  },
  {
    path: '/introduce',
    component: () => import('@/views/introduce/index.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
