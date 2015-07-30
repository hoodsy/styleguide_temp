'use strict';

var ComponentsModule = require('../_index');

/*
** Filter text to $stateProvider format.
**
** @ngInject
 */
function NavbarStateFilter() {
	return function (input) {
		return (input) ? input.split('.')[0] : '';
	};
}

ComponentsModule.filter('toState', NavbarStateFilter);