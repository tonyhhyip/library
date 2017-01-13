//@flow
'use strict';
const gulp = require('gulp');
const {log} = require('gulp-util');
const sass = require('gulp-sass');
const rename = require('gulp-rename');
const cleanCss = require('gulp-clean-css');

gulp.task('css', () => {
  return gulp.src('./assets/scss/*.scss')
    .on('error', log)
    .pipe(sass())
    .pipe(gulp.dest('public'))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(cleanCss())
    .pipe(gulp.dest('public'));
});