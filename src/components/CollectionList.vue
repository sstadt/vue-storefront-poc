
<template lang="pug">
  .collection-list 
    h1 Collections
</template>

<script>
  import { getTestData } from '@/services/shopify'

  export default {
    name: 'CollectionList',
    created () {
      getTestData().then(response => console.log(response))
    }
  }
</script>

<style scoped lang="scss">
</style>