import { mount, createLocalVue } from '@vue/test-utils';
import BootstrapVue from 'bootstrap-vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import VueRouter from 'vue-router';

import HomePage from '../HomePage.vue';

const localVue = createLocalVue();
localVue.use(VueRouter);
localVue.use(BootstrapVue);
localVue.component('font-awesome-icon', FontAwesomeIcon);
library.add(faSearch);

const router = new VueRouter();

const userData = {
  profile: {
    avatar_url: "https://avatars1.githubusercontent.com/u/24378782?v=4",
    name: "Luís Felipe Bilecki",
    bio: "Fullstack Developer",
    email: null,
    public_repos: 45,
    public_gists: 0,
    followers: 13,
    following: 27
  },
  repos: [
    {
      name: "bull-queue-example"
    },
    {
      name: "cart-redis-nodejs"
    }
  ],
  starred: [
    {
      full_name: "pyenv/pyenv"
    }
  ]
};

describe('Homepage.vue', () => {
  it('should display error component when api calls has failed', async () => {
    const wrapper = mount(HomePage, { localVue, router });

    await wrapper.setData({
      user: null,
      error: 'error',
      loading: false
    });

    const errorBox = wrapper.find('#error-box');
    expect(errorBox.exists()).toBeTruthy();
  });

  it('should display loading component when request is not complete', async () => {
    const wrapper = mount(HomePage, { localVue, router });

    await wrapper.setData({
      user: null,
      error: null,
      loading: true
    });

    const loading = wrapper.find('#loading');
    expect(loading.exists()).toBeTruthy();
  });

  it('should render user profile components when user data is changed', async () => {
    const wrapper = mount(HomePage, { localVue, router });

    await wrapper.setData({
      user: userData,
      error: null,
      loading: false
    });

    const userProfile = wrapper.find('#user-profile');
    const starredList = wrapper.find('#starred');
    const repositoresList = wrapper.find('#repositories');
    
    expect(userProfile.exists()).toBeTruthy();
    expect(starredList.exists()).toBeTruthy();
    expect(repositoresList.exists()).toBeTruthy();
  });
});