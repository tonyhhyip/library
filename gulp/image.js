//@flow
'use strict';

const gulp = require('gulp');
const {log} = require('gulp-util');
const imagemin = require('gulp-imagemin');

gulp.task('image', () => {
  return gulp.src('./assets/images/**/*.*')
    .pipe(imagemin({
      progressive: true
    }))
    .on('error', log)
    .pipe(gulp.dest('public/images'));
});
