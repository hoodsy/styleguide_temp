'use strict';

module.exports = {

  'browserPort'  : 3000,
  'UIPort'       : 3001,
  'serverPort'   : 3002,

  'browserify': {
    'entries'   : ['./app/index.js'],
    'bundleName': 'index.js',
    'sourcemap' : true
  },

  'dgeni': {
    'src': '../../docs/config',
    'dest': 'build/dgeni'
  },

  'dist': {
    'root'  : 'build'
  },

  'fonts': {
    'src' : 'app/assets/fonts/**/*',
    'dest': 'build/fonts'
  },

  'generate': {
    'src' : 'app/**/modules/*Content.js'
  },

  'gzip': {
    'src': 'build/**/*.{html,xml,json,css,js,js.map}',
    'dest': 'build/',
    'options': {}
  },

  'images': {
    'src' : 'app/assets/images/**/*',
    'dest': 'build/images'
  },

  'markdown': {
    'src': 'app/**/*.md',
    'dest': 'build/markdown'
  },

  'scripts': {
    'src' : 'app/**/*.js',
    'dest': 'build/js'
  },

  'styles': {
    'src' : 'app/**/*.scss',
    'dest': 'build/css'
  },

  'test': {
    'karma': 'test/karma.conf.js',
    'protractor': 'test/protractor.conf.js'
  },

  'views': {
    'watch': [
      'app/index.html',
      'app/**/*.html'
    ],
    'src': 'app/**/*.html',
    'dest': 'app/'
  }

};
