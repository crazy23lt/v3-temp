/*
 * @Author: liut
 * @Date: 2024-07-26 22:33:41
 * @LastEditors: liut
 * @LastEditTime: 2024-07-27 23:19:03
 * 2394630102@qq.com
 * Copyright (c) 2024 by 刘涛, All Rights Reserved.
 */
import { fileURLToPath, URL } from 'node:url'

import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd())
  return {
    plugins: [vue(), vueJsx(), vueDevTools()],
    // 根据 mode 加载 .env
    define: {
      BASE_URL: env.VITE_APP_BASE_URL
    },
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    }
  }
})
