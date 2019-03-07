<template lang="pug">
  .home
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
