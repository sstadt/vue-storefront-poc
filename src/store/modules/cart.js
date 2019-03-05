
const state = {
  items: []
}

const mutations = {
  ADD_ITEM (state, item) {
    state.items.push(item)
  },
  UPDATE_ITEM (state, updatedItem) {
    let index = state.items.find(item => item.id === id)
    state.items.splice(index, 1, updatedItem)
  },
  REMOVE_ITEM (state, { id }) {
    let index = state.items.find(item => item.id === id)
    state.items.splice(index, 1)
  }
}

const actions = {
  populate () {},
  addItem () {},
  updateItem () {},
  removeItem () {}
}

export default { namespaced: true, state, mutations, actions }
