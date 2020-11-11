<template>
  <div id="app">
    <b-container>
      <Header />
      <router-view />
    </b-container>
  </div>
</template>

<script>
import Header from '@/components/ui/Header.vue';

export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style>
  .container {
    padding-top: 60px;
  }
</style>
