'use strict';

var MarketingModule = require('../_index');

/**
 * @desc
 ** Routing is organized like so:
 **
 ** state - top level nav (navbar)
 ** section - component inside of state
 ** subsection - component inside of section
 **
 ** e.g. state.section.subsection -> 
 **      marketing.colors.primary
 *
 * @ngInject
 */
function MarketingRoutes() {

  var defaultTabs = ['Examples', 'Downloads', 'Usage'];

  var service = {
    state: 'Marketing',
    
    sections: [
      {
        section: 'Introduction',
        subsections: [
          {title: 'Intro', tabs: defaultTabs},
        ]
      },
      {
        section: 'Logo',
        subsections: []
      },
      {
        section: 'Colors',
        subsections: [
          {title: 'Primary', tabs: ['Usage']},
          {title: 'Charts', tabs: defaultTabs},
          {title: 'Gray Scale', tabs: defaultTabs},
          {title: 'Status', tabs: defaultTabs}
        ]
      },
      {
        section: 'Typography',
        subsections: [
          {title: 'Typeface', tabs: defaultTabs},
          {title: 'Paragraph', tabs: defaultTabs},
        ]
      },
      {
        section: 'Test',
        subsections: [
          {title: 'Subsection', tabs: defaultTabs}
        ]
      }
    ]
  };

  return service;

}

MarketingModule.factory('MarketingRoutes', MarketingRoutes);