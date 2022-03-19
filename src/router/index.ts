import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Layout from '@/layout/index.vue';

const routes: Array<RouteRecordRaw> = [
  // {
  //   path: '/',
  //   redirect: '/introduce'
  // },
  // {
  //   path: '/introduce',
  //   component: () => import('@/views/introduce/index.vue')
  // }
  {
    path: '/',
    component: Layout,
    redirect: 'introduce',
    children: [
      {
        path: '/introduce',
        component: () => import('@/views/introduce/index.vue'),
        name: 'introduce',
      },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
