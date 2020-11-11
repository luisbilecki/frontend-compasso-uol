<template>
  <div class="home">
    <h4>Welcome to the HomePage</h4>
    <font-awesome-icon icon="user-secret" />
    <h5>{{ $route.params.username }}</h5>
    <SearchBox />
    <UserProfile />
  </div>
</template>

<script>
import SearchBox from '@/components/SearchBox.vue';
import UserProfile from '@/components/UserProfile.vue';

export default {
  name: 'HomePage',
  components: {
    SearchBox,
    UserProfile
  },
  props: {},
  methods: {},
  data() {
    return {
      user: {
        profile: null,
        repos: null,
        starred: null
      }      
    }
  }
};
</script>

<style>
</style>