import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Axios from 'axios'
import VueAxios from 'vue-axios'



createApp(App).use(router, VueAxios, Axios).mount('#app')
