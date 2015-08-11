'use strict';

var ComponentsModule = require('../_index');
var content = require('./UIDesignContent');

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

  return content;

}

ComponentsModule.factory('UIDesignRoutes', UIDesignRoutes);