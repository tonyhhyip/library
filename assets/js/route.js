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
      path: '/intro',
      name: 'intro',
      component: require('./page/About.vue'),
      children: [
        {
          path: 'aim',
          name: 'aim',
          component: require('./page/introduction/Aim.vue')
        },
        {
          path: 'rule',
          name: 'rule',
          component: require('./page/introduction/Rule.vue')
        },
        {
          path: '*',
          redirect: {name: 'aim'}
        }
      ]
    },
    {
      path: '*',
      redirect: {name: 'home'}
    }
  ]
};