<template lang="pug">
  #app
    #nav
      router-link(to="/") Home
      router-link(to="/about") About
    .wrapper
      .content
        router-view
      .sidebar
        //- sidecart
</template>

<script>
  export default {
    name: 'App',
    created () {
      this.$store.dispatch('shop/populate')
      this.$store.dispatch('collections/populate')
      this.$store.dispatch('products/populate')
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
