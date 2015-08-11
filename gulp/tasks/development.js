'use strict';

var gulp        = require('gulp');
var runSequence = require('run-sequence');

gulp.task('dev', ['clean'], function(cb) {

  cb = cb || function() {};

  global.isProd = false;

  runSequence([
  	'generate', 
  	'styles', 
  	'images', 
  	'fonts', 
  	'views', 
  	'markdown', 
  	'dgeni', 
  	'browserify'
  	], 
  	'watch', cb);

});