//@flow
'use strict';

const gulp = require('gulp');
const {log} = require('gulp-util');
const {Environment, FileSystemLoader} = require('nunjucks');
const jinja = require('gulp-nunjucks');
const htmlmin = require('gulp-htmlmin');
const rename = require('gulp-rename');

const env = new Environment([
  new FileSystemLoader('assets/pages'),
  new FileSystemLoader('assets/layouts')
]);

gulp.task('build:page', () => {
  return gulp.src('./assets/pages/**/*.jinja')
    .on('error', log)
    .pipe(jinja.compile({}, {env}))
    .pipe(htmlmin({
      collapseWhitespace: true
    }))
    .pipe(rename({
      extname: '.html'
    }))
    .pipe(gulp.dest('public'));
});