'use strict';

var gulp        = require('gulp');
var config      = require('../config');
var markdown    = require('gulp-markdown');
var highlightjs = require('highlight.js');

gulp.task('markdown', function() {
	return gulp.src(config.markdown.src)
		.pipe(markdown({gfm: true, 
			highlight: function(code) {
				return highlightjs.highlightAuto(code).value;
		}
	})).pipe(gulp.dest(config.markdown.dest))
});