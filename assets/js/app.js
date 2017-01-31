'use strict';

if (window.location.hash.indexOf('%21') > -1) {
  window.location.href = window.location.href.replace('%21', '');
}

const Vue = require('vue');
const VueRouter = require('vue-router');

const router = new VueRouter(require('./route'));
router.beforeEach((to, from, next) => {
  const sidenav: Element | null = document.querySelector('[data-sidenav]');
  if (sidenav && sidenav.parentNode) sidenav.parentNode.removeChild(sidenav);
  next();
});

require('offline-plugin/runtime').install();

new Vue({
  router,
  mounted() {
    const loader = document.getElementById('page-loader');
    if (loader && loader.parentNode) loader.parentNode.removeChild(loader);
  }
}).$mount('#app');
