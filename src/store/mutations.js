import * as types from './mutation-types'
const mutations = {
  [types.SET_LOGINSTATE](state, loginstate) {
    state.loginstate = loginstate
  },
  [types.SET_TITLESNAME](state, titlesname) {
    state.titlesname = titlesname
  },
  [types.SET_CHECKEDSTATE](state, checkedstate) {
    state.checkedstate = checkedstate
  },
  [types.CHANGE_CHECKEDSTATE](state, index) {
    state.checkedstate[index] = !state.checkedstate[index]
  }
}
export default mutations
