<template>
  <b-list-group-item>{{title}}</b-list-group-item>
</template>

<script>
export default {
  name: 'ListItem',
  props: {
    title: {
      type: String,
      required: true
    }
  }
};
</script>