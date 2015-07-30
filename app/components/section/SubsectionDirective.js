'use strict';

var ComponentsModule = require('../_index');

/**
 * @name SubsectionDirective
 * @desc
 *
 ** Displays a subsection using the argument object's
 ** data.
 **
 ** Expects subsection-data to contain:
 ** title: <string>,
 ** tabs: [<string1>, <string2>...],
 ** assets: <path to html partial>,
 ** description: <path to .md file>
 **
 *
 * @ngInject
 */
function SubsectionDirective() {
	return {
		restrict: 'E',
		controller: 'SubsectionCtrl',
		controllerAs: 'vm',
		scope: {
			'title': '=',
			'tabs': '=',
			'content': '=',
		},
		templateUrl: 'components/section/_subsection.html'
	};
}

ComponentsModule.directive('subsection', SubsectionDirective);