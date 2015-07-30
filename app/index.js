'use strict';

var angular = require('angular');

// Dependencies
require('angular-ui-router');

// Angular Modules
require('./templates');
require('./guidelines/_index');
require('./ui-design/_index');
require('./marketing/_index');
require('./components/_index');

// create and bootstrap application
angular.element(document).ready(function() {

  var requires = [
    // Dependencies
    'ui.router',

    // Angular Modules
    'templates',
    // 'app.guidelines',
    'app.ui-design',
    'app.marketing',
    'app.components'
  ];

  // mount on window for testing
  window.app = angular.module('app', requires);

  // angular.module('app').constant('AppSettings', require('./constants'));

  angular.module('app').config(require('./config/routes'));

  angular.module('app').run(require('./config/state'));

  angular.bootstrap(document, ['app']);

});