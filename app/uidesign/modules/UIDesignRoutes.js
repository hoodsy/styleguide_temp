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

  var defaultTabs = ['API', 'Code', 'Usage'];

  var service = {
    state: 'UIDesign',
    
    sections: [
      { 
        section: 'Introduction',
        subsections: [
        ]
      },
      {
        section: 'Buttons',
        subsections: [
          {title: 'Basic', tabs: defaultTabs},
          {title: 'Vertical', tabs: defaultTabs},
          {title: 'Grouped', tabs: defaultTabs}
        ]
      },
      {
        section: 'Dropdowns',
        subsections: [
          {title: 'Select', tabs: defaultTabs, component: 'duiDropdownDirective.html'},
        ]
      }
    ]
  };

  return service;

}

ComponentsModule.factory('UIDesignRoutes', UIDesignRoutes);