import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Vue3Resize from 'vue3-resize'

import '@fortawesome/fontawesome-free/js/all'
import 'vue3-resize/dist/vue3-resize.css'
// import 'alga-css/dist/alga-v1.min.css'

createApp(App)
  .use(router)
  .use(Vue3Resize)
  .component('modal', {
    template: '#modal-template'
  })
  .mount('#app')
