<template>
  <b-card no-body class="mb-1">
    <b-card-header header-tag="header" class="p-1" role="tab">
      <b-button block v-b-toggle.repositories variant="primary">Repositories</b-button>
    </b-card-header>
    <b-collapse id="repositories" accordion="repositories" role="tabpanel">
      <b-card-body>
        <b-card-text>
          <List :items=items />
        </b-card-text>
      </b-card-body>
    </b-collapse>
  </b-card>
</template>

<script>
import List from '@/components/List.vue';

export default {
  name: 'ReposList',
  components: {
    List
  },  
  props: {
    items: {
      type: Array,
      required: true
    }
  }
}
</script>