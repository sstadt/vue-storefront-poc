
<template lang="pug">
  a(:href="url") {{ collection.title }}
</template>

<script>
  export default {
    name: 'CollectionLink',
    props: {
      collection: Object
    },
    computed: {
      url () {
        return `/collection/${this.collection.handle}`
      }
    }
  }
</script>

<style scoped lang="scss">
</style>