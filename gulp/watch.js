//@flow
'use strict';

const gulp = require('gulp');

gulp.task('watch:css', () => {
  return gulp.watch([
    './assets/scss/**/*.scss'
  ], ['css']);
});

gulp.task('watch:page', () => {
  return gulp.watch([
    './assets/pages/**/*.jinja',
    './assets/layouts/**/*.jinja'
  ], ['dev:page']);
});

gulp.task('watch:image', () => {
  return gulp.watch([
    './assets/images/**/*.*'
  ], ['image']);
});

gulp.task('watch', ['watch:image', 'watch:page', 'watch:css']);