'use strict';

var ComponentsModule = require('../_index');

/**
 * @name SidebarCtrl
 * @desc
 * 
 * @ngInject
 */
function SidebarCtrl ($state) {
	var vm = this;

	initActiveSection();

	vm.activeSection = function (section) {
		vm.inSection = section;
	};

	vm.activeSubsection = function (subsection) {
		vm.inSubsection = subsection;
	};

	function initActiveSection () {
		var state = $state.current.name.split('.')[1];
		state = state.charAt(0).toUpperCase() + state.slice(1);
		vm.inSection = state;
	}

}

ComponentsModule.controller('SidebarCtrl', SidebarCtrl);