import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Vue3Resize from 'vue3-resize'

import '@fortawesome/fontawesome-free/js/all'
import 'vue3-resize/dist/vue3-resize.css'

createApp(App).use(router).use(Vue3Resize).mount('#app')
