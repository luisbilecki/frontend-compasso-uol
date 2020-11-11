<template>
  <b-row class="mt-3">
    <b-col>
      <b-alert show variant="danger" id="error-box">
        {{message}}
      </b-alert>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: 'Error',
  props: {
    message: String
  }
}
</script>