
<template lang="pug">
  .collection-list 
    h1 Collections
    .collection-links
      collection-link(v-for="collection in collections", :key="collection.id", :collection="collection")
</template>

<script>
  import { mapState } from 'vuex'

  import CollectionLink from '@/components/CollectionLink.vue'

  export default {
    name: 'CollectionList',
    components: { CollectionLink },
    computed: {
      ...mapState({
        collections: state => state.collections.all
      })
    }
  }
</script>

<style scoped lang="scss">
  .collection-links {
    display: flex;

    a:not(:last-child) {
      margin-right: 20px;
    }
  }
</style>