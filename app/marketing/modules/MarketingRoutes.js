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
          {title: 'Intro', tabs: defaultTabs}
        ]
      },
      {
        section: 'Logo',
        subsections: []
      },
      {
        section: 'Colors',
        subsections: [
          {title: 'Primary', tabs: defaultTabs},
          {title: 'Gray Scale', tabs: defaultTabs},
          {title: 'Signaling', tabs: defaultTabs}
        ]
      },
      {
        section: 'Typography',
        subsections: [
          {title: 'Fonts', tabs: defaultTabs},
          {title: 'Font Sizes', tabs: defaultTabs}
        ]
      }
    ]
  };

  return service;

}

MarketingModule.factory('MarketingRoutes', MarketingRoutes);