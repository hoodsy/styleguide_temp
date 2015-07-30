'use strict';

/**
 * @ngInject
 */
function Routes($stateProvider, $locationProvider, $urlRouterProvider) {

  $locationProvider.html5Mode(true);

  // injectStates(RoutesService, $stateProvider);

  // $stateProvider
  // .state('root', {
  //   url: '/'
  // })
  // .state('guidelines', {
  //   url: '/guidelines',
  //   controller: 'ExampleCtrl as root',
  //   templateUrl: 'guidelines/_index.html',
  //   title: 'Guidelines'
  // })
  // .state('ui-design', {
  //   url: '/ui-design',
  //   controller: 'ExampleCtrl as root',
  //   templateUrl: 'ui-design/_index.html',
  //   title: 'UI-Design'
  // })
  // .state('marketing', {
  //   url: '/marketing',
  //   controller: 'MarketingCtrl as marketing',
  //   templateUrl: 'marketing/_index.html',
  //   title: 'Marketing'
  // });

  $urlRouterProvider.otherwise('/');

}

function injectStates(RoutesService, $stateProvider) {
  angular.forEach(RoutesService.stateList, function(route) {
    $stateProvider.state(route.state, route.stateObj);
  });
}

module.exports = Routes;