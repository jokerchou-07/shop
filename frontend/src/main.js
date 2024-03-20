import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import FunTab from 'fun-tab'
import Vant from 'vant'

import './assets/main.css'
import './assets/iconfont.css'
import 'vant/lib/index.css'
import 'tailwindcss/tailwind.css'

const app = createApp(App)


app.use(router)
app.use(FunTab)
app.use(Vant)

app.mount('#app')


