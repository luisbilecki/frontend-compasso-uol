<template>
  <b-row class="bg-white border d-flex flex-column align-items-center justify-content-center mt-3">
    <b-row>    
      <b-col>
        <b-row class="py-3">
          <b-col sm=4 class="text-center">
            <img :src="user.profile.avatar_url" alt="" class="img-rounded img-fluid" width="150" height="150"/>
          </b-col>
          <b-col sm=8 class="d-flex flex-column justify-content-center">
            <h4>{{user.profile.name}}</h4>
            <small v-if="user.profile.email">{{user.profile.email}}</small>
            <small v-if="user.profile.bio">{{user.profile.bio}}</small>
            <small class="d-flex justify-content-between">
              <span>{{user.profile.public_repos}} repositories</span>
              <span>{{user.profile.followers}} followers</span>
              <span>{{user.profile.following}} following</span>
            </small>
          </b-col>
        </b-row>
      </b-col>    
    </b-row>
    <b-row class="accordion w-100" role="tablist">
      <b-col>
        <ReposList :items=user.repos />
        <StarredList :items=user.starred />
      </b-col>
    </b-row>
  </b-row>
</template>

<script>
import ReposList from '@/components/ReposList.vue';
import StarredList from '@/components/StarredList.vue';

export default {
  name: 'UserProfile',
  components: {
    ReposList,
    StarredList
  },
  props: {
    user: {
      type: Object,
      required: true
    }
  }
}
</script>