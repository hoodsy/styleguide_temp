'use strict';

var ComponentsModule = require('../_index');

/**
 * @name SubsectionCtrl
 * @desc
 * 
 * @ngInject
 */
function SubsectionCtrl () {
	var vm = this;

	vm.activeTab = function (tab) {
		vm.inTab = tab;
	};

}

ComponentsModule.controller('SubsectionCtrl', SubsectionCtrl);