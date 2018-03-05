import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import 'mint-ui/lib/style.css'
import 'common/stylus/index.styl'
/* import Vuelazyload from 'vue-lazyload' */

import fastclick from 'fastclick'
import MintUI from 'mint-ui'
import $ from 'jquery'
/* import { Lazyload } from 'mint-ui'; */
Vue.use(MintUI)
/* Vue.use(Lazyload, {
  loading: require('common/images/default.png')
}) */
Vue.config.productionTip = false

/* 移动端点击300MS延时 */
fastclick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
