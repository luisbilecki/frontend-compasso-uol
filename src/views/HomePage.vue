<template>
  <div>
    <SearchBox v-on:doUserSearch="doUserSearch" />
    <Error v-if="error" :message="error" />
    <Loading v-if="loading" />
    <UserProfile v-if="user" :user="user"/>
  </div>
</template>

<script>
import SearchBox from '@/components/SearchBox.vue';
import Error from '@/components/Error.vue';
import Loading from '@/components/Loading.vue';
import UserProfile from '@/components/UserProfile.vue';

import usersService from '@/services/user';

export default {
  name: 'HomePage',
  components: {
    Loading,
    Error,
    SearchBox,
    UserProfile
  },
  props: {},
  methods: {
    doUserSearch: function (username) {
      this.loading = true

      usersService
        .getUserDetails(username)
        .then(data => {
          this.error = null
          this.user = {
            profile: data.profile,
            repos: data.repos,
            starred: data.starred
          }
        })
        .catch(err => {
          console.error(err)
          this.error = 'Error during the fetch process...'
          this.user = null
        })
        .finally(() => {
          this.loading = false
        })
    }
  },
  data() {
    return {
      user: null,
      error: null,
      loading: false 
    }
  }
};
</script>