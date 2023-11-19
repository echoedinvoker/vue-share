import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import axios from 'axios'
import { createPinia } from 'pinia'
import { VueQueryPlugin } from '@tanstack/vue-query'

axios.defaults.baseURL = 'http://localhost:3000'

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.use(VueQueryPlugin)
app.mount('#app')
