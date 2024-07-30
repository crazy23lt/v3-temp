/*
 * @Author: liut
 * @Date: 2024-07-26 22:35:39
 * @LastEditors: liut
 * @LastEditTime: 2024-07-27 22:45:31
 * 2394630102@qq.com
 * Copyright (c) 2024 by 刘涛, All Rights Reserved.
 */

import LayoutView from '@/layout'
import AboutView from '@/views/about'
import LoginView from '@/views/login/index'
import OtherView from '@/views/other'
import { useAppStore } from '@/store/index'
import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import NotFoundView from '@/views/notFound'
import UserInfoView from '@/views/user'
/**
 * path:"/user/:id" 动态的路由 ==> route.params.id
 */
// 公共路由表
const constantRoutes: RouteRecordRaw[] = [
  { path: '/login', name: 'login', component: LoginView },
  {
    path: '/',
    name: 'main',
    component: LayoutView,
    children: [
      { path: '/', name: 'about', component: AboutView },
      { path: '/other', name: 'other', component: OtherView }
    ]
  },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFoundView }
]
// 异步路由
export const asyncRoutes: RouteRecordRaw[] = [
  {
    path: '/premission',
    component: LayoutView,
    children: [{ path: '/userinfo', name: 'userinfo', component: UserInfoView }]
  }
]
// createRouter 创建路由
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: constantRoutes
})
/**
 * 全局前置守卫
 * 返回 false 取消导航
 */
router.beforeEach((to, from, next) => {
  const store = useAppStore()
  if (to.path === '/login') next()
  if (store.isAuthenticated) {
    next()
  } else {
    next({ name: 'login' })
  }
})
export default router
