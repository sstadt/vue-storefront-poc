
<template lang="pug">
  .product-page(v-if="product")
    h1 {{ product.title }} - ${{ selectedVariant.price }}
    button(@click="addToCart") Add To Cart
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    name: 'ProductPage',
    computed: {
      ...mapState({ 
        allProducts: state => state.products.all
      }),
      productHandle () {
        return this.$route.params.handle
      },
      product () {
        return this.allProducts.find(product => product.handle === this.productHandle)
      },
      selectedVariant () {
        return this.product.variants.edges[0].node
      }
    },
    methods: {
      addToCart () {
        this.$store.dispatch('cart/addItem', {
          id: this.selectedVariant.id,
          quantity: 1
        })
      }
    }
  }
</script>

<style scoped lang="scss">
</style>