import Vue from 'vue';
import VueRouter from 'vue-router';
import VueStash from 'vue-stash';

// Add Vue Plugins
window.Vue = Vue;
Vue.use(VueRouter);
Vue.use(VueStash);

// Add routes
import App from './App.vue';
import NotFound from './NotFound.vue';

const routes = [
  { path: '/', component: App },
  { path: '*', component: NotFound }
];

// Setup the default store
const store = {
  user: undefined
};

const router = new VueRouter({routes});

new Vue({
  el: '#app',
  router,
  data: {
    store
  }
});
