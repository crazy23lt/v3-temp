/*
 * @Author: liut
 * @Date: 2024-07-27 21:26:27
 * @LastEditors: liut
 * @LastEditTime: 2024-07-27 21:53:56
 * 2394630102@qq.com
 * Copyright (c) 2024 by 刘涛, All Rights Reserved.
 */
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
export interface AppStoreIProps {
  token?: string
  username?: string
}
const useAppStore = defineStore(
  'appStore',
  () => {
    const cache = ref<AppStoreIProps>({})
    const isAuthenticated = computed<boolean>(() => {
      return !!cache.value.token
    })
    return { cache, isAuthenticated }
  },
  {
    persist: {
      debug: process.env.NODE_ENV !== 'production'
    }
  }
)
export default useAppStore
