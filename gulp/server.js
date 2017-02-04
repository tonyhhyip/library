//@flow
'use strict';

const fs = require('fs');
const gulp = require('gulp');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const merge = require('webpack-merge');
const HotModuleReplacementPlugin = require('webpack/lib/HotModuleReplacementPlugin');

const config = require('../webpack.config');

gulp.task('server', () => {
  const devConfig = merge.smart({
    entry: {
      app: [
        'webpack-dev-server/client?http://localhost:8080/'
      ]
    },
    plugins: [
      new HotModuleReplacementPlugin()
    ]
  }, config);

  const compiler = webpack(devConfig);
  compiler.plugin('done', (stats) => {
    fs.writeFile('./webpack.json', JSON.stringify(stats.toJson('verbose')));
  });

  const server = new WebpackDevServer(compiler, {
    hot: true,
    contentBase: './public'
  });

  server.listen(8080);
});