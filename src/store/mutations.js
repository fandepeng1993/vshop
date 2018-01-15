import * as types from './mutation-types'
const mutations = {
  [types.SET_LOGINSTATE](state, loginstate) {
    state.loginstate = loginstate
  }
}

export default mutations
