import { createApp } from 'vue';
import App from './App.vue';

createApp(App).mount('#app');

import '@/assets/common.css'
import '@/assets/iconfont.css'

import FunTab from 'fun-tab'
const app = createApp(App)
app.use(FunTab)
app.mount('#app')
