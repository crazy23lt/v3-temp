import 'normalize.css'

import { createApp } from 'vue'
import { App } from '@/App'
import router from '@/router'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import { createPinia } from 'pinia'
import vuetify from '@/plugin/vuetify'
const app = createApp(App)
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
/**
 * 1. 全局注册 RouterView 和 RouterLink
 * 2. 添加全局 $router $route   选项式api
 * 3. 启用 useRouter()路由器实例 useRoute()当前路由 组合式api
 * 4. 触发路由器解析初始路由
 */
app.use(router)
app.use(pinia)
app.use(vuetify)
app.mount('#app')
