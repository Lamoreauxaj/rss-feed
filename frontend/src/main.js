import Vue from 'vue';
import VueRouter from 'vue-router';
import VueStash from 'vue-stash';

window.Vue = Vue;
Vue.use(VueRouter);
Vue.use(VueStash);

import App from './App.vue';

const routes = [
  { path: '/', component: App }
];

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
