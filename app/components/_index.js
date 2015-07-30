'use strict';

var angular = require('angular');
var bulk = require('bulk-require');

/*
 * @ngInject
 */

// Part of attempt to dynamically populate routes
// 
// function injectStates (RoutesService, $stateProvider) {    
//   angular.forEach(RoutesService.stateList, function(route) {
//     $stateProvider.state(route.state, route.stateObj);
//   });
// }

module.exports = angular.module('app.components', []);
// angular.module('app.components').config(injectStates)

bulk(__dirname, ['./**/!(*_index|*.spec).js']);