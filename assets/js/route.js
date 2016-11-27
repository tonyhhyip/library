'use strict';

module.exports = {
  routes: [
    {
      path: '/',
      name: 'home',
      component: require('./page/Home.vue')
    },
    {
      path: '/books',
      name: 'books',
      component: require('./page/Books.vue')
    },
    {
      path: '/books/:id',
      name: 'book',
      component: require('./page/Book.vue')
    },
    {
      path: '/intro/:section',
      name: 'intro',
      component: require('./page/About.vue')
    },
    {
      path: '/suggestion',
      name: 'suggest',
      component: require('./page/Suggestion.vue'),
      children: [
        {
          path: 'purchase',
          component: require('./page/Purchase.vue'),
          name: 'purchase'
        },
        {
          path: 'guideline',
          component: require('./page/Guideline.vue'),
          name: 'guideline'
        },
        {
          path: 'security',
          component: require('./page/Security.vue'),
          name: 'security'
        }
      ]
    },
    {
      path: '*',
      redirect: {name: 'home'}
    }
  ]
};