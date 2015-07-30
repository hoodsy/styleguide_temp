'use strict';

var ComponentsModule = require('../_index');

/**
 * @name SidebarCtrl
 * @desc
 * 
 * @ngInject
 */
function SidebarCtrl () {
	var vm = this;

	vm.activeSection = function (section) {
		vm.inSection = section;
	};

	vm.activeSubsection = function (subsection) {
		vm.inSubsection = subsection;
	};

}

ComponentsModule.controller('SidebarCtrl', SidebarCtrl);