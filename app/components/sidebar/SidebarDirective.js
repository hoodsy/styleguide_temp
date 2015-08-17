'use strict';

var ComponentsModule = require('../_index');

/**
 * @ngInject
 */
function SidebarDirective($window, $timeout) {
	return {
		restrict: 'E',
		controller: 'SidebarCtrl',
		controllerAs: 'vm',
		scope: {
			routes: '='
		},
		templateUrl: 'components/sidebar/_sidebar.html',
		link: linkFn
	};

	function linkFn () {
		// timeout used to give sidebar time to load on state change
		$timeout(function () {
			$(function () {
				var sidebar = $('#sidebar');
				var offset = sidebar.offset();
				$window = $(window);

				$window.scroll(function() {
					if ($window.scrollTop() > offset.top) {
						sidebar.stop().animate({
							marginTop: $window.scrollTop() - offset.top
						});
					}
					else {
						sidebar.stop().animate({ marginTop: 0 });
					}
				});
			});
		}, 1000);
	}
}

ComponentsModule.directive('sidebar', SidebarDirective);