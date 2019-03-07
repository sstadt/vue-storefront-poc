
<template lang="pug">
  .collection-page(v-if="collection")
    h1 {{ collection.title }}
    product-link(v-for="product in products", :product="product", :key="product.id")
</template>

<script>
  import { mapState } from 'vuex'

  import ProductLink from '@/components/ProductLink.vue'

  export default {
    name: 'CollectionPage',
    components: { ProductLink },
    computed: {
      ...mapState({
        collections: state => state.collections.all,
        allProducts: state => state.products.all
      }),
      collectionHandle () {
        return this.$route.params.handle
      },
      collection () {
        return Array.isArray(this.collections) ? this.collections.find(collection => collection.handle === this.collectionHandle) : {}
      },
      products () {
        return this.allProducts.filter(product =>
          Boolean(product.collections.edges.find(collection => collection.node.handle === this.collectionHandle)))
      }
    }
  }
</script>

<style scoped lang="scss">
  .collection-page {
    display: flex;
    flex-direction: column;
  }
</style>