'use strict';

/* globals describe, it, expect */

import Vue from 'vue';
import VueRouter from 'vue-router';
import Navbar from '../assets/js/component/Navbar.vue';

describe('Navbar component', () => {
  const construst = () => {
    const router = new VueRouter(require('../assets/js/route'));
    const vm = new Vue({
      template: '<div></div>',
      components: {
        Navbar
      }
    });
  };
  it('Has mounted hook', () => {
    expect(typeof Navbar.mounted).toBe('function');
  });

  it('has data method', () => {
    expect(typeof Navbar.data).toBe('function');
  });
});