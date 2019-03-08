<template lang="pug">
  #app
    #nav
      router-link(to="/") Home
      collection-link(v-for="collection in collections", :key="collection.id", :collection="collection")
    .wrapper
      .content
        router-view
      .sidebar
        sidecart
</template>

<script>
  import { mapState } from 'vuex'

  import Sidecart from '@/components/Sidecart.vue'
  import CollectionLink from '@/components/CollectionLink.vue'

  export default {
    name: 'App',
    components: { Sidecart, CollectionLink },
    created () {
      this.$store.dispatch('shop/populate')
      this.$store.dispatch('collections/populate')
      this.$store.dispatch('products/populate')
    },
    computed: {
      ...mapState({
        collections: state => state.collections.all
      })
    }
  }
</script>


<style lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    max-width: 1200px;
    margin: 0 auto;
  }
  #nav {
    padding: 30px 0;
    a {
      font-weight: bold;
      color: #2c3e50;
      margin-right: 20px;

      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }

  .wrapper {
    display: flex;
    justify-content: space-between;
  }

  .content {
    flex-basis: calc(75% - 20px);
  }

  .sidebar {
    flex-basis: 25%;
  }
</style>
