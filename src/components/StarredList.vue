<template>
  <b-card no-body class="mb-1">
    <b-card-header header-tag="header" class="p-1" role="tab">
      <b-button block v-b-toggle.starred variant="primary">Starred</b-button>
    </b-card-header>
    <b-collapse id="starred" accordion="starred" role="tabpanel">
      <b-card-body>
        <b-card-text>Testing</b-card-text>
      </b-card-body>
    </b-collapse>
  </b-card>
</template>

<script>
export default {
  name: 'StarredList'
}
</script>