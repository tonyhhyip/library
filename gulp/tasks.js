//@flow
'use strict';

const gulp = require('gulp');

gulp.task('dev', ['image', 'css', 'dev:page', 'server', 'watch']);
gulp.task('build', ['image', 'css', 'build:page', 'js']);