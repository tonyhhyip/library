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
      component: require('./page/About.vue'),
      children: [
        {
          path: 'aim',
          component: require('./page/introduction/Aim.vue')
        },
        {
          path: 'rule',
          component: require('./page/introduction/Rule.vue')
        }
      ]
    },
    {
      path: '*',
      component: require('./page/Home.vue')
    }
  ]
};