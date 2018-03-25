import * as types from './mutation-types'

export const setExample = function ({commit}, example) {
  commit(types.SET_EXAMPLE, example)
}
export const editDefaultAddress = function ({commit, state}, index) {
  commit(types.EDIT_ADDRESS, index)
}

export const editAddressIndexInfo = function ({commit, state}, {list, index}) {
  commit(types.SAVE_ADDRESS, {
    list: list,
    index: index
  })
}
export const deleteAddress = function ({commit, state}, index) {
  commit(types.DELETE_ADDRESS, index)
}
