<template lang="pug">
  .home-page
    collection-list
</template>

<script>
  import CollectionList from '@/components/CollectionList.vue'

  export default {
    name: 'HomePage',
    components: {
      CollectionList
    }
  }
</script>
