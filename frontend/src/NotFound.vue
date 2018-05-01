<template>
  <div id="not-found">
    <my-header title="Not Found"></my-header>
    <div class="row">
      <div class="not-found-message">
        <h4>404 Page Not Found</h4>
        <h5>Sorry, that page doesn't exist.</h5>
      </div>
    </div>
  </div>
</template>

<script>
  import MyHeader from './components/MyHeader.vue';
  export default {
    name: 'not-found',
    components: {
      'my-header': MyHeader
    }
  };
</script>

<style lang="sass" scoped>
  @import './assets/variables.sass'
  #not-found
    .not-found-message
      text-align: center
      margin-top: 40px
      h4
        color: $primary-text
      h5
        color: $secondary-text
</style>
