'use strict';

var ComponentsModule = require('../_index');

/*
** Filter text to $stateProvider format.
**
** @ngInject
 */
function SidebarSubstateFilter() {
	return function (input) {
		return (input) ? input.replace(' ', '').toLowerCase() : '';
	};
}

ComponentsModule.filter('toSubstate', SidebarSubstateFilter);