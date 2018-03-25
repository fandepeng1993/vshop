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
  },
  [types.SET_EXAMPLE](state, example) {
    state.example = example
  },
  [types.SET_ALLADDRESS](state, alladdress) {
    state.address = alladdress
  },
  [types.SET_ADDRESS](state, address) {
    state.address.unshift(address)
  },
  [types.EDIT_ADDRESS](state, index) {
    for (let i in state.address) {
      if (Number(i) === index) {
        state.address[i].isDefault = 1
      } else {
        state.address[i].isDefault = 0
      }
    }
  },
  [types.SAVE_ADDRESS](state, {list, index}) {
    state.address.splice(Number(index), 1, list)
  },
  [types.DELETE_ADDRESS](state, index) {
    state.address.splice(Number(index), 1)
  }
}
export default mutations
