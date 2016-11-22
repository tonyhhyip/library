'use strict';

import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';


if (location.hash.indexOf('%21') > -1) {
  location.href = location.href.replace('%21', '');
}

Vue.use(VueResource);

const router = new VueRouter(require('./route'));

new Vue({
  router,
  mounted() {
    const loader = document.getElementById('page-loader');
    loader.parentNode.removeChild(loader);
  }
}).$mount('#app');
