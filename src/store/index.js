
import Vue from 'vue'
import Vuex from 'vuex'

import products from './modules/products'
import collections from './modules/collections'
import cart from './modules/cart'

Vue.use(Vuex)

const state = {}

export default new Vuex.Store({
  state,
  modules: {
    products,
    collections,
    cart
  }
})
