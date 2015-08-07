'use strict';

var gulp   = require('gulp');
var config = require('../config');

gulp.task('watch', ['browserSync', 'server'], function() {

  // Scripts are automatically watched and rebundled by Watchify inside Browserify task
  gulp.watch(config.scripts.src, ['lint', 'dgeni']);
  gulp.watch(config.styles.src,  ['styles']);
  gulp.watch(config.images.src,  ['images']);
  gulp.watch(config.fonts.src,   ['fonts']);
  gulp.watch(config.markdown.src, ['markdown']);
  gulp.watch(config.views.watch, ['views']);

});