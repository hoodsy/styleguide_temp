'use strict';

var gulp  = require('gulp');
var Dgeni = require('dgeni');
var config = require('../config');

gulp.task('dgeni', function() {

	var dgeni = new Dgeni([require(config.dgeni.src)]);
  return dgeni.generate();

});
