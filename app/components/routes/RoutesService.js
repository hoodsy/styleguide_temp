'use strict';

var ComponentsModule = require('../_index');

/**
 * @desc
 ** Routing:
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
function RoutesService(GuidelinesRoutes, UIDesignRoutes, MarketingRoutes, $stateProvider) {

  var service = {};

  service.stateList = [];

  // Use helper functions to build app states
  service.states = [MarketingRoutes, UIDesignRoutes, GuidelinesRoutes];
  angular.forEach(service.states, function(routes) {
    // add top level state (e.g. Marketing)
    service.stateList.push(buildState(routes.state, '', false));
    
    angular.forEach(routes.sections, function(section) {
      service.stateList.push(buildState(section, routes.state, true));
    })
  });

  function buildState (routes, topState, isSection) {

    // Format routes object to be state compatible
    var ctrl, stateFormat, template, url, statePath;
    if (isSection) {
      topState = topState.toLowerCase()
      var path = topState + '/components/';

      stateFormat = routes.section.toLowerCase();
      statePath = topState + '.' + stateFormat;
      ctrl = null;
      url = '/' + topState + '/' + stateFormat;
      template = path + stateFormat + '/_' + stateFormat + '.html';
    }
    else {
      stateFormat = routes.toLowerCase();
      statePath = stateFormat;
      ctrl = routes + 'Ctrl as ' + stateFormat;
      url = '/' + stateFormat;
      template = stateFormat + '/_index.html';
    }

    // Build state object
    var stateObj = {
      state: statePath,
      assets: {
        url: url,
        controller: ctrl,
        templateUrl: template
      }
    }
    return stateObj;
  }

  return service;
}

ComponentsModule.factory('RoutesService', RoutesService);