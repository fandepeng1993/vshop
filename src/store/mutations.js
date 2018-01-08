import * as types from './mutation-types'
const mutations = {
  [types.SET_GOODSNAME](state, goodsname) {
    state.goodsname = goodsname
  }
}

export default mutations
