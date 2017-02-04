//@flow
'use strict';

const OccurenceOrderPlugin = require('webpack/lib/optimize/OccurrenceOrderPlugin');
const DedupePlugin = require('webpack/lib/optimize/DedupePlugin');
const OfflinePlugin = require('offline-plugin');

module.exports = {
  plugins: [
    new OccurenceOrderPlugin(),
    new DedupePlugin(),
    new OfflinePlugin({
      caches: {
        main: [
          ':rest:',
          './app.min.css',
          './',
          './images/cover.jpg',
          './images/pyc.gif'
        ]
      },
      publicPath: '/'
    })
  ],
  externals: {
    vue: 'Vue',
    'vue-router': 'VueRouter',
    marked: 'marked'
  },
  devtool: 'source-map',
  entry: {
    app: ['./assets/js/app']
  },
  output: {
    path: `${__dirname}/public`,
    publicPath: './',
    filename: '[name].js',
  },
  resolve: {
    extensions: ['', '.json', '.js', '.vue'],
    fallback: ['node_modules']
  },
  resolveLoader: {
    fallback: ['node_modules']
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue',
        exclude: /node_modules/,

      },
      {
        test: /\.js$/,
        loader: 'babel'
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test  : /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url'
      },
    ]
  },
  vue: {
    loaders: {
      js: 'babel'
    }
  }
};
