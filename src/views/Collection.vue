
<template lang="pug">
  .collection-page 
    h1 {{ collection.title }}
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    name: 'CollectionPage',
    computed: {
      ...mapState({
        collections: state => state.collections.all,
        allProducts: state => state.products.all
      }),
      collection () {
        return this.collections.length ? this.collections.find(collection => collection.handle === this.$route.params.handle) : {}
      }
    }
  }
</script>

<style scoped lang="scss">
</style>