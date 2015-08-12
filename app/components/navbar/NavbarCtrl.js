'use strict';

var ComponentsModule = require('../_index');

/*
** Filter text to $stateProvider format.
**
** @ngInject
 */
function NavbarCtrl($state) {
	var vm = this;

	var stateName = $state.current.name;
	console.log($state.current);

	vm.activeState = function (state) {
		console.log(stateName, state);
		if (stateName === state) return true;
		else return false;
	}

}

ComponentsModule.controller('NavbarCtrl', NavbarCtrl);