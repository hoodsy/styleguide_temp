 'use strict';

var ComponentsModule = require('../_index');

/**
 * @name SwatchDirective
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
function SwatchDirective() {
	return {
		restrict: 'E',
		scope: {
			'color': '@',
			'type': '@',
			'labels': '='
		},
		templateUrl: 'components/swatch/_swatch.html'
	};
}

ComponentsModule.directive('swatch', SwatchDirective);