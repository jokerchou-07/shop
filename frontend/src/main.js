import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import FunTab from 'fun-tab'


import './assets/main.css'
import './assets/iconfont.css'
const app = createApp(App)

app.use(router)
app.use(FunTab)

app.mount('#app')


