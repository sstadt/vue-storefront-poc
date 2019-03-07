
<template lang="pug">
  router-link(:to="url") {{ product.title }}
</template>

<script>
  export default {
    name: 'ProductLink',
    props: {
      product: Object
    },
    computed: {
      url () {
        return `/product/${this.product.handle}`
      }
    }
  }
</script>

<style scoped lang="scss">
</style>