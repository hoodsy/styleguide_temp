'use strict';

var ComponentsModule = require('../_index');

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

  var service = {
    state: 'Marketing',
    
    sections: [
      { 
        section: 'Introduction',
        subsections: [
          'Intro1',
          'Intro2',
          'Intro3'
        ]
      },
      {
        section: 'Logo',
        subsections: []
      },
      {
        section: 'Colors',
        subsections: [
          'Primary',
          'Gray Scale',
          'Signaling'
        ]
      },
      {
        section: 'Typography',
        subsections: []
      }
    ]
  };

  return service;

}

ComponentsModule.factory('MarketingRoutes', MarketingRoutes);