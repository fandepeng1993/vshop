import Vue from 'vue'
import Vuex from 'vuex'
/* import * as name 返回的是{}或括号包起来的对象 */
import * as actions from './actions'
import * as getters from './getters'
import state from './state'
import mutations from './mutations'
/* 控制台打印修改信息 */
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)
/* 检测方式 */
const debug = process.env.NODE_ENV !== 'production'
/* npm run dev  dev环境   npm run build production环境 */
export default new Vuex.Store({
  actions,
  getters,
  state,
  mutations,
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
