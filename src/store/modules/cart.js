
import {
  createCheckout, 
  addCartItem,
  updateCartItem, 
  removeCartItem
} from '@/services/shopify'

const state = {
  checkout: {}
}

const mutations = {
  SET_CHECKOUT (state, checkout) {
    state.checkout = checkout
  }
}

const actions = {
  init ({ commit }) {
    createCheckout()
      .then(checkout => commit('SET_CHECKOUT', checkout))
  },
  addItem ({ state, commit }, { id, quantity }) {
    addCartItem(state.checkout.id, { id, quantity })
      .then(checkout => commit('SET_CHECKOUT', checkout))
  },
  updateItem ({ state, commit }, { id, quantity }) {
    updateCartItem(state.checkout.id, { id, quantity })
      .then(checkout => commit('SET_CHECKOUT', checkout))
  },
  removeItem ({ state, commit }, id) {
    removeCartItem(state.checkout.id, id)
      .then(checkout => commit('SET_CHECKOUT', checkout))
  }
}

export default { namespaced: true, state, mutations, actions }
