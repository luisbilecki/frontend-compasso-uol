<template>
  <div class="home">
    <h4>Welcome to the HomePage</h4>
    <h5>{{ $route.params.username }}</h5>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  components: {},
  props: {},
  methods: {},
};
</script>

<style scoped>
</style>