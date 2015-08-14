'use strict';

var gulp        = require('gulp');
var runSequence = require('run-sequence');

gulp.task('prod', ['clean'], function(cb) {

  cb = cb || function() {};

  global.isProd = false;
  // global.isProd = true;

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
  	'gzip', cb);

});
