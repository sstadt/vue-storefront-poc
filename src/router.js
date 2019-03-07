
import Vue from 'vue'
import Router from 'vue-router'

import HomePage from './views/HomePage.vue'
import CollectionPage from './views/CollectionPage.vue'
import ProductPage from './views/ProductPage.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/collection/:handle',
      name: 'collection',
      component: CollectionPage
    },
    {
      path: '/product/:handle',
      name: 'product',
      component: ProductPage
    }
  ]
})
