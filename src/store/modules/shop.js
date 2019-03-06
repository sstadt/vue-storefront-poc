
import { getShopData } from '@/services/shopify.js'

const state = {
  name: '',
  description: ''
}

const mutations = {
  SET_NAME (state, name) {
    state.name = name
  },
  SET_DESCRIPTION (state, description) {
    state.description = description
  }
}

const actions = {
  populate ({ commit }) {
    getShopData().then(({ name, description }) => {
      commit('SET_NAME', name)
      commit('SET_DESCRIPTION', description)
    })
  }
}

export default { namespaced: true, state, mutations, actions }
