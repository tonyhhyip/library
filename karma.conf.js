// Karma configuration

const webpack = require('./webpack.config');

module.exports = function(config) {
  config.set({
    webpack,
    webpackMiddleware: {noInfo: true},
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      'spec/index.js'
    ],
    exclude: [],
    preprocessors: {
      'spec/index.js': ['webpack']
    },
    reporters: ['progress', 'spec'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['PhantomJS'],
    singleRun: false
  });
};
