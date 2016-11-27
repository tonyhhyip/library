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
      canReuse: false
    },
    {
      path: '*',
      redirect: {name: 'home'}
    }
  ]
};