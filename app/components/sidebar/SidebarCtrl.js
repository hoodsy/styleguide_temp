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
		goToSection(section);
	};

	vm.activeSubsection = function (subsection) {
		vm.inSubsection = subsection;
	};

	function initActiveSection () {
		vm.inSection = isSubstate($state.current.name)
			? stateFromSubstate($state.current.name)
			: $state.current.name;
	}

	function stateFromSubstate (substate) {
		var state = substate.split('.')[1];
		return state.charAt(0).toUpperCase() + state.slice(1);
	}

	function isSubstate(state) {
		return state.includes('.');
	}

	function goToSection (section) {
		if (!isSubstate($state.current.name)) 
			$state.go($state.current.name + '.' + section.toLowerCase()); 
	}

}

ComponentsModule.controller('SidebarCtrl', SidebarCtrl);