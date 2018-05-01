<template>
  <div id="my-header">
    <!-- Main Nav -->
    <nav>
      <div class="nav-wrapper">
        <!-- Brand Logo -->
        <a to="/" class="left brand-logo" :style="{ 'margin-left': !titleOnly ? '60px' : '10px' }">{{ title }}</a>
        <!-- Nav Trigger Button -->
        <a v-if="!titleOnly" data-target="side-nav" class="sidenav-trigger"><i class="material-icons">menu</i></a>
        <ul v-if="!titleOnly" class="right login-nav">
          <router-link to="/profile"><img src="https://randomuser.me/api/portraits/men/14.jpg" alt="Avatar" class="circle"></router-link>
        </ul>
      </div>
    </nav>
    <!-- Side Nav -->
    <ul v-if="!titleOnly" class="side-nav fixed" id="side-nav">
      <li><router-link to="/test"></router-link></li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'my-header',
    props: {
      'title': {
        required: false,
        default: 'RSS Feed',
        type: String
      },
      'titleOnly': {
        required: false,
        default: false,
        type: Boolean
      }
    },
    mounted() {
      $('.side-nav').sidenav();
    }
  }
</script>

<style lang="sass" scoped>
  @import '../assets/variables.sass'
  #my-header
    nav
      background-color: $primary-color
      color: $text
      .nav-wrapper
        .brand-logo
        .login-nav
          img
            width: 48px
            vertical-align: middle
        .sidenav-trigger
          display: block
</style>
