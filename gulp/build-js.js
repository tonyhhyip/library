//@flow
'use strict';

const fs = require('fs');
const gulp = require('gulp');
const {log} = require('gulp-util');
const webpack = require('webpack');
const merge = require('webpack-merge');
const UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');
const config = require('../webpack.config');

gulp.task('build:js', (cb) => {
  const productionConfig = merge.smart({
    plugins: [
      new UglifyJsPlugin({compress: true})
    ]
  }, config);
  webpack(productionConfig, (e, stats) => {
    if (e) {
      throw new webpack.PluginError('[webpack]', e);
    } else {
      log('[webpack]', stats.toString({
        version: true,
        timings: true,
        assets: true,
        chunks: true,
        chunkModules: true,
        modules: true
      }));
      fs.writeFile('./webpack.json', JSON.stringify(stats.toJson('verbose')));
    }
    cb();
  });
});