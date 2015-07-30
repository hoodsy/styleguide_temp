'use strict';

var ComponentsModule = require('../_index');

/*
** Filter text to $stateProvider format.
**
** @ngInject
 */
function SwatchFilter() {
	return function (input) {
		return (input) ? input.charAt(0).toUpperCase() + input.slice(1) : '';
	};
}

ComponentsModule.filter('capitalizeFirst', SwatchFilter);