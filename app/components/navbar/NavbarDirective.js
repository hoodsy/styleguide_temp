'use strict';

var ComponentsModule = require('../_index');

/*
**
** @ngInject
 */
function NavbarDirective() {
	return {
		restrict: 'E',
		scope: {
			states: '='
		},
		templateUrl: 'components/navbar/_navbar.html'
	};
}

ComponentsModule.directive('navbar', NavbarDirective);