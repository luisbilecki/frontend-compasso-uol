<template>
  <b-list-group>
    <ListItem v-for="item in items" :key="item.name" :title="item.name">
    </ListItem>
  </b-list-group>
</template>

<script>
import ListItem from '@/components/ListItem.vue';

export default {
  name: 'List',
  components: {
    ListItem
  },
  props: {
    items: Array
  }
}
</script>