import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BuyAdModal from './views/Shared/BuyAdModal.vue'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'
import 'roboto-fontface/css/roboto/roboto-fontface.css'

const vuetify = createVuetify({
  components,
  directives,
})

createApp(App)
  .use(router)
  .use(store)
  .use(vuetify)
  .component('buy-ad-modal', BuyAdModal)
  .mount('#app')
