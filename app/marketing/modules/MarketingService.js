'use strict';

var MarketingModule = require('../_index');

/**
 * @name
 * @desc
 * 
 * @ngInject
 */
function MarketingService (MarketingRoutes, SectionService) {

	var service = {};
	var create = SectionService.createContent;

	angular.forEach(MarketingRoutes.sections, function(routes){
		var sectionTitle = routes.section.replace(' ', '').toLowerCase();
		service[sectionTitle] = {};
		service[sectionTitle].title = sectionTitle;
		var path = 'marketing/components/' + sectionTitle + '/';

		angular.forEach(routes.subsections, function(subsection){
			var subsectionTitle = subsection.title.replace(' ', '').toLowerCase();
			service[sectionTitle][subsectionTitle] = {};
			service[sectionTitle][subsectionTitle].title = subsection.title;
			service[sectionTitle][subsectionTitle].tabs = subsection.tabs;
			service[sectionTitle][subsectionTitle].content = create(path, subsectionTitle, subsection);
		});
	});

	return service;

}

MarketingModule.factory('MarketingService', MarketingService);