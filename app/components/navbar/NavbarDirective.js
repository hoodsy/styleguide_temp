'use strict';

var ComponentsModule = require('../_index');

/*
**
** @ngInject
 */
function NavbarDirective() {
	return {
		restrict: 'E',
		controller: 'NavbarCtrl',
		controllerAs: 'vm',
		scope: {
			states: '='
		},
		templateUrl: 'components/navbar/_navbar.html'
	};
}

ComponentsModule.directive('navbar', NavbarDirective);