
import { getProducts } from '@/services/shopify'

const state = {
  all: []
}

const mutations = {
  SET_PRODUCTS (state, products) {
    state.all = products
  }
}

const actions = {
  populate ({ commit }) {
    getProducts().then(products => {
      commit('SET_PRODUCTS', products)
    })
  }
}

export default { namespaced: true, state, mutations, actions }
