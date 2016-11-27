'use strict';

const navs = require('../data/nav.json');

module.exports = function title(name) {
  const tabs = navs[name];
  const titles = {};
  tabs.forEach((tab) => titles['name' in tab ? tab.name : tab.section] = tab.display);
  return titles;
};