//@flow
'use strict';

if (window.location.hash.indexOf('%21') > -1) {
  window.location.href = window.location.href.replace('%21', '');
}
require.ensure(['vue', 'vue-router', 'vue-resource'], function () {
  const Vue = require('vue');
  const VueRouter = require('vue-router');
  const VueResource = require('vue-resource');
  Vue.use(VueResource);

  const router = new VueRouter(require('./route'));

  router.beforeEach((to: Route, from: Route, next: Function) => {
    const sidenav: Element | null = document.querySelector('[data-sidenav]');
    if (sidenav && sidenav.parentNode) sidenav.parentNode.removeChild(sidenav);
    next();
  });

  new Vue({
    router,
    mounted() {
      const loader: Element | null = document.getElementById('page-loader');
      if (loader && loader.parentNode) loader.parentNode.removeChild(loader);
    }
  }).$mount('#app');
});
