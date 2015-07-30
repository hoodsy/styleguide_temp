'use strict';

var gulp     = require('gulp');
var config   = require('../config');
var markdown = require('gulp-markdown');

gulp.task('markdown', function() {
	return gulp.src(config.markdown.src)
		.pipe(markdown())
		.pipe(gulp.dest(config.markdown.dest))
});