<template>
  <b-row class="bg-white border align-items-center justify-content-center">
    <b-col sm=12 md=7>
      <b-form class="my-3" @submit="onSubmit">
        <b-row>
          <b-col xs=8 md=10>
            <b-form-group
              id="username-input-group"
              label-for="username"
            >
              <b-form-input
                id="username"
                v-model="username"
                type="text"
                required
                placeholder="Search username"
              />
            </b-form-group>
          </b-col>
          <b-col xs=4 md=2>
            <b-button block type="submit" variant="primary">
              <font-awesome-icon icon="search" />
            </b-button>
          </b-col>
        </b-row>
      </b-form>   
    </b-col> 
  </b-row>
</template>

<script>
export default {
  name: 'SearchBox',
  data() {
    return {
      username: ''
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      this.$emit('doUserSearch', this.username);
    }
  }
}
</script>