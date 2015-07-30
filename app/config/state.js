'use strict';

/**
 * @ngInject
 */
function state($state, $stateParams, $rootScope) {
	$rootScope.$state = $state;
	$rootScope.$stateParams = $stateParams;
}

module.exports = state;