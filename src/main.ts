import 'normalize.css'
import { createApp } from 'vue'
import { App } from '@/App'
import router from '@/router'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import { createPinia } from 'pinia'
const app = createApp(App)
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
app.use(router)
app.use(pinia)
app.mount('#app')
