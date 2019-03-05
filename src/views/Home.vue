<template lang="pug">
  .home
    collection-list
</template>

<script>
// @ is an alias to /src
import CollectionList from '@/components/CollectionList.vue'

export default {
  name: 'home',
  components: {
    CollectionList
  }
}
</script>
