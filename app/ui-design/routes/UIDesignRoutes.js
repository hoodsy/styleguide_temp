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
function UIDesignRoutes() {

  var service = {
    state: 'UI-Design',
    
    sections: [
      { 
        section: 'Introduction',
        subsections: []
      },
      {
        section: 'Logo',
        subsections: []
      },
      {
        section: 'Colors',
        subsections: []
      },
      {
        section: 'Typography',
        subsections: []
      }
    ]
  };

  return service;

}

ComponentsModule.factory('UIDesignRoutes', UIDesignRoutes);