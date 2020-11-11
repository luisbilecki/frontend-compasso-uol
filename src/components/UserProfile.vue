<template>
  <b-row class="bg-white border d-flex flex-column align-items-center justify-content-center mt-3">
    <b-row>    
      <b-col>
        <b-row class="py-3">
          <b-col sm=4 class="text-center">
            <img :src="user.avatar_url" alt="" class="img-rounded img-fluid" width="150" height="150"/>
          </b-col>
          <b-col sm=8 class="d-flex flex-column justify-content-center">
            <h4>{{user.name}}</h4>
            <small v-if="user.email">{{user.email}}</small>
            <small v-if="user.bio">{{user.bio}}</small>
            <small class="d-flex justify-content-between">
              <span>{{user.public_repos}} repositories</span>
              <span>{{user.followers}} followers</span>
              <span>{{user.following}} following</span>
            </small>
          </b-col>
        </b-row>
      </b-col>    
    </b-row>
    <b-row class="accordion w-100" role="tablist">
      <b-col>
        <ReposList />
        <StarredList />
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
  data() {
    return {
      user: {
        name: 'Luís Felipe Bilecki',
        email: 'luis.bilecki@gmail.com',
        bio: 'Fullstack Developer',
        public_repos: 45,
        followers: 13,
        following: 27,
        avatar_url: 'https://avatars1.githubusercontent.com/u/24378782?v=4'
      }
    }
  }
}
</script>