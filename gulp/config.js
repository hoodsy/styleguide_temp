'use strict';

module.exports = {

  'browserPort'  : 3000,
  'UIPort'       : 3001,
  'serverPort'   : 3002,

  'styles': {
    'src' : 'app/**/*.scss',
    'dest': 'build/css'
  },

  'scripts': {
    'src' : 'app/**/*.js',
    'dest': 'build/js'
  },

  'images': {
    'src' : 'app/assets/images/**/*',
    'dest': 'build/images'
  },

  'fonts': {
    'src' : ['app/assets/fonts/**/*'],
    'dest': 'build/fonts'
  },

  'views': {
    'watch': [
      'app/index.html',
      'app/**/*.html'
    ],
    'src': 'app/**/*.html',
    'dest': 'app/'
  },

  'markdown': {
    'src': 'app/**/*.md',
    'dest': 'build/markdown'
  },

  'gzip': {
    'src': 'build/**/*.{html,xml,json,css,js,js.map}',
    'dest': 'build/',
    'options': {}
  },

  'dist': {
    'root'  : 'build'
  },

  'browserify': {
    'entries'   : ['./app/index.js'],
    'bundleName': 'index.js',
    'sourcemap' : true
  },

  'test': {
    'karma': 'test/karma.conf.js',
    'protractor': 'test/protractor.conf.js'
  }

};
