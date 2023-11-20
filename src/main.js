import { createApp } from 'vue'
import './style.css'
import './script'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
const app = createApp(App);

app.use(router);
app.use(pinia);
app.use(ElementPlus);
app.mount('#app');

app.config.globalProperties.$filters = {
    currencySymbol(value){
        return "৳ " + value.toLocaleString()
    },

    makeImagePath(img){
        return import.meta.env.VITE_API_URL + "/" + img;
    }
}


