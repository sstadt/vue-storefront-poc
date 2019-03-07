
import { getCollections } from '@/services/shopify'

const state = {
  all: []
}

const mutations = {
  SET_COLLECTIONS (state, collections) {
    state.all = collections
  }
}

const actions = {
  populate ({ commit }) {
    getCollections().then((collections) => {
      commit('SET_COLLECTIONS', collections)
    })
  }
}

export default { namespaced: true, state, mutations, actions }
