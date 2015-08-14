'use strict';

var UIDesignModule = require('../_index');

/**
 * @name
 * @desc
 * 
 * @ngInject
 */
function UIDesignService (UIDesignRoutes, SectionService) {

	var service = SectionService.attachContent(UIDesignRoutes.state, UIDesignRoutes.sections);
	return service;

}

UIDesignModule.factory('UIDesignService', UIDesignService);