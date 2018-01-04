import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import 'common/stylus/index.styl'
import fastclick from 'fastclick'
Vue.use(MintUI)
Vue.config.productionTip = false
/* 移动端300MS延时 */
fastclick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
