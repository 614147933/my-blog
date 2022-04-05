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
  },
  {
    path: '/draggable',
    component: Layout,
    redirect: 'draggable',
    children: [
      {
        path: '/draggable',
        component: () => import('@/views/draggable/index.vue'),
        name: 'draggable',
      },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
