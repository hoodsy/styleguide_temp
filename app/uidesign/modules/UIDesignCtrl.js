'use strict';

var UIDesignModule = require('../_index');

/**
 * @name
 * @desc
 * 
 * @ngInject
 */
function UIDesignCtrl (UIDesignRoutes, UIDesignService, $state) {
	var vm = this;

	init();
	
	// TODO: remove section checking duplication
	// (also lives in sidebar scope)
	vm.inSection = $state.current.name.split('.')[1];
	vm.activeSection = function (section) {
		vm.inSection = section;
	};

	function init() {
		vm.sidebar = UIDesignRoutes;
		angular.forEach(UIDesignService, function(section){
			vm[section.title] = section
		});
	}

}

UIDesignModule.controller('UIDesignCtrl', UIDesignCtrl);