import { createApp } from 'vue'
import App from './App.vue'

import './assets/main.css'
import router from './router';
import "bootstrap/dist/js/bootstrap.js"
import "bootstrap/dist/css/bootstrap.min.css"

const app = createApp(App)

app.use(router())

app.mount('#app')
