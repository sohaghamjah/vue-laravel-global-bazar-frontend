import { createApp } from 'vue'
import './style.css'
import './script'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'

const pinia = createPinia()
const app = createApp(App);

app.use(router)
app.use(pinia)
app.use(ElementPlus)
app.mount('#app')


