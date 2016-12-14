'use strict';

if (location.hash.indexOf('%21') > -1) {
  location.href = location.href.replace('%21', '');
}
require.ensure(['vue', 'vue-router', 'vue-resource'], function () {
  const Vue = require('vue');
  const VueRouter = require('vue-router');
  const VueResource = require('vue-resource');
  Vue.use(VueResource);

  const router = new VueRouter(require('./route'));

  router.beforeEach((to, from, next) => {
    const sidenav = document.querySelector('[data-sidenav]');
    if (sidenav) sidenav.parentNode.removeChild(sidenav);
    next();
  });

  new Vue({
    router,
    mounted() {
      const loader = document.getElementById('page-loader');
      loader.parentNode.removeChild(loader);
    }
  }).$mount('#app');
});
