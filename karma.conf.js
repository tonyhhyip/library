// Karma configuration

const webpack = require('./webpack.config');
delete webpack.entry;
delete webpack.externals;

module.exports = function(config) {
  config.set({
    webpack,
    webpackMiddleware: {noInfo: true},
    frameworks: ['jasmine'],
    files: [
      'spec/index.js'
    ],
    preprocessors: {
      'spec/index.js': ['webpack']
    },
    reporters: ['spec'],
    colors: true,
    browsers: ['PhantomJS'],
    singleRun: false,
    watch: true,
    port: 9876
  });
};
