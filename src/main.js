import Vue from 'vue'
import Vuesax from 'vuesax'
import App from './App'
import router from './router'
import store from './store'
import theme from './theme/theme'
import './config/rem'
import FastClick from 'fastclick' // 处理移动端click事件300毫秒延迟

import 'normalize.css'
import 'vuesax/dist/vuesax.css'
import 'material-icons/iconfont/material-icons.css'

if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function () {
    FastClick.attach(document.body)
  }, false)
}

Vue.config.productionTip = false

Vue.use(Vuesax, theme)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
