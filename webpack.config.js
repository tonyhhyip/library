'use strict';

const UglifyPlugin = require('webpack/lib/optimize/UglifyJsPlugin');
const OccurenceOrderPlugin = require('webpack/lib/optimize/OccurrenceOrderPlugin');
const DedupePlugin = require('webpack/lib/optimize/DedupePlugin');

module.exports = {
  plugins: [
    new UglifyPlugin({minimize: true}),
    new OccurenceOrderPlugin(),
    new DedupePlugin()
  ],
  externals: {
    vue: 'Vue',
    'vue-resource': 'VueResource',
    'vue-router': 'VueRouter',
    marked: 'marked'
  },
  devtool: 'source-map',
  entry: {
    app: './assets/js/app'
  },
  output: {
    path: `${__dirname}/public/js`,
    publicPath: '/library/js',
    filename: '[name].js'
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
        exclude: /node_modules/
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
