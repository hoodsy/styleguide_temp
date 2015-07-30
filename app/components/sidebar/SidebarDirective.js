'use strict';

var ComponentsModule = require('../_index');

/**
 * @ngInject
 */
function SidebarDirective() {
	return {
		restrict: 'E',
		controller: 'SidebarCtrl',
		controllerAs: 'vm',
		scope: {
			routes: '='
		},
		templateUrl: 'components/sidebar/_sidebar.html'
	};
}

ComponentsModule.directive('sidebar', SidebarDirective);