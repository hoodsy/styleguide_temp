'use strict';

var gulp = require('gulp');
var ghPages = require('gulp-gh-pages');

gulp.task('deploy', ['prod'], function() {

  return gulp.src('build/**/*')
  	.pipe(ghPages());

});