'use strict';

var ComponentsModule = require('../_index');

/**
 * @name
 * @desc
 * 
 * @ngInject
 */
function MarketingCtrl (MarketingRoutes) {
	var vm = this;

	vm.sidebar = MarketingRoutes;

}

ComponentsModule.controller('MarketingCtrl', MarketingCtrl);