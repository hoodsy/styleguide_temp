'use strict';

var MarketingModule = require('../_index');

/**
 * @name
 * @desc
 * 
 * @ngInject
 */
function MarketingCtrl (MarketingRoutes, MarketingService, $state) {
	var vm = this;

	angular.forEach(MarketingService, function(section){
		vm[section.title] = section
	});

	vm.sidebar = MarketingRoutes;

	// TODO: remove section checking duplication
	// (also lives in sidebar scope)
	vm.inSection = $state.current.name.split('.')[1];
	vm.activeSection = function (section) {
		vm.inSection = section;
	};

	console.log($state.current)

}

MarketingModule.controller('MarketingCtrl', MarketingCtrl);