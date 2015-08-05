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
    state: 'UIDesign',
    
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
        section: 'Colors',
        subsections: [
          'Primary',
          'Gray Scale',
          'Signaling'
        ]
      }
    ]
  };

  return service;

}

ComponentsModule.factory('UIDesignRoutes', UIDesignRoutes);