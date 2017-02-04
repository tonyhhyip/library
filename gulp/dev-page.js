//@flow
'use strict';

const gulp = require('gulp');
const {log} = require('gulp-util');
const {Environment, FileSystemLoader} = require('nunjucks');
const jinja = require('gulp-nunjucks');
const rename = require('gulp-rename');

gulp.task('dev:page', () => {
  const env = new Environment([
    new FileSystemLoader('assets/pages', {watch: true}),
    new FileSystemLoader('assets/layouts', {watch: true})
  ]);
  return gulp.src('./assets/pages/**/*.jinja')
    .on('error', log)
    .pipe(jinja.compile({}, {env}))
    .pipe(rename({
      extname: '.html'
    }))
    .pipe(gulp.dest('public'));
});