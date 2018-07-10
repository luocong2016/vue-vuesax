import Vue from 'vue'
import Vuesax from 'vuesax'
import App from './App'
import router from './router'
import store from './store'
import theme from './theme/theme'

import 'normalize.css'
import 'vuesax/dist/vuesax.css'
import 'material-icons/iconfont/material-icons.css'

Vue.config.productionTip = false

Vue.use(Vuesax, theme)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
