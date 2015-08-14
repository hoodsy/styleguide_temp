'use strict';

var MarketingModule = require('../_index');

/**
 * @name
 * @desc
 * 
 * @ngInject
 */
function MarketingService (MarketingRoutes, SectionService) {

	var service = SectionService.attachContent(MarketingRoutes.state, MarketingRoutes.sections);
	return service;

}

MarketingModule.factory('MarketingService', MarketingService);