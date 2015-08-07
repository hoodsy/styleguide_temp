'use strict';

var gulp     = require('gulp');
var config   = require('../config');
var markdown = require('gulp-markdown');

gulp.task('markdown', function() {
	return gulp.src(config.markdown.src)
		.pipe(markdown({gfm: true, 
			highlight: function(code) {
				return require('highlight.js').highlightAuto(code).value;
		}
	})).pipe(gulp.dest(config.markdown.dest))
});