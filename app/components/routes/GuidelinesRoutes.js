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
function GuidelinesRoutes() {

  var service = {
    state: 'Guidelines',
    
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

ComponentsModule.factory('GuidelinesRoutes', GuidelinesRoutes);