'use strict';

var MarketingModule = require('../_index');
var content = require('./MarketingContent');

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

  return content;

}

MarketingModule.factory('MarketingRoutes', MarketingRoutes);