'use strict';

var MarketingModule = require('../_index');

/**
 *  MarktingCtrl
 * 
 * 
 * @ngInject
 */
function MarketingCtrl (MarketingRoutes, MarketingService, $state) {
	var vm = this;

	angular.forEach(MarketingService, function(section){
		vm[section.title] = section
	});

	// TODO: remove section checking duplication
	// (also lives in sidebar scope)
	vm.inSection = $state.current.name.split('.')[1];
	vm.activeSection = function (section) {
		vm.inSection = section;
	};

	init();

	function init() {
		vm.sidebar = MarketingRoutes;
	}

}

MarketingModule.controller('MarketingCtrl', MarketingCtrl);