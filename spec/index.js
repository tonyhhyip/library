'use strict';

Function.prototype.bind = require('function-bind');

const context = require.context('.', true, /\.spec/);
context.keys().forEach(context);
