'use strict';

var angular = require('angular');

// Dependencies
require('angular-ui-router');
// require('angular-ui-select');

// Angular Modules
require('./templates');
require('./guidelines/_index');
require('./uidesign/_index');
require('./marketing/_index');
require('./components/_index');

// create and bootstrap application
angular.element(document).ready(function() {

  var requires = [
    // Dependencies
    'ui.router',
    'ui.select',
    // 'hljs',

    // Angular Modules
    'templates',
    'app.guidelines',
    'app.uidesign',
    'app.marketing',
    'app.components'
  ];

  // mount on window for testing
  window.app = angular.module('app', requires);

  // angular.module('app').constant('AppSettings', require('./constants'));

  var config = require('./config/config')
  angular.module('app').config(config.Routes);
  angular.module('app').run(config.State);

  angular.bootstrap(document, ['app']);

});