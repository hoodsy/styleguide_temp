'use strict';

var config = {};

/**
 * @ngInject
 */
config.Routes = function ($stateProvider, $locationProvider, $urlRouterProvider) {

  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/');
  config.stateRef = $stateProvider;

}

/**
 * @ngInject
 */
config.State = function state($state, $stateParams, $rootScope, RoutesService) {
  $rootScope.$state = $state;
  $rootScope.$stateParams = $stateParams;

  // Dynamically build states
  angular.forEach(RoutesService.stateList, function(route) {
    config.stateRef.state(route.state, {
      url: route.assets.url,
      controller: route.assets.controller,
      templateUrl: route.assets.templateUrl
    });
  });
}

module.exports = config;