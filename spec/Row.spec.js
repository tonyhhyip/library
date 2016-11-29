'use strict';

/* globals describe, it, expect */

import Row from '../assets/js/component/Row.vue';

describe('Row component', () => {
  it('Type Test', () => {
    expect(typeof Row).toBe('object');
  });

  it('Test render function', () => {
    expect(typeof Row.render).toBe('function');
  });
});