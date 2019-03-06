
import Vue from 'vue'
import Vuex from 'vuex'

import shop from './modules/shop'
import products from './modules/products'
import collections from './modules/collections'
import cart from './modules/cart'

Vue.use(Vuex)

const state = {}

export default new Vuex.Store({
  state,
  modules: {
    shop,
    products,
    collections,
    cart
  }
})
