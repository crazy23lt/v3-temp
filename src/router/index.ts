import LayoutView from '@/layout'
import AboutView from '@/views/about'
import LoginView from '@/views/login/index'
import OtherView from '@/views/other'

import { createRouter, createWebHistory } from 'vue-router'
/**
 * path:"/user/:id" 动态的路由 ==> route.params.id
 */
// 路由表
const routes = [
  { path: '/login', name: 'login', component: LoginView },

  {
    path: '/',
    name: 'main',
    component: LayoutView,
    children: [
      { path: '/other', name: 'other', component: OtherView },
      { path: '/about', name: 'about', component: AboutView }
    ]
  }
]
// createRouter 创建路由
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
})
router.beforeEach((to, from, next) => {
  return next()
})
export default router
