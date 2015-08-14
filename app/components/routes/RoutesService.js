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
function RoutesService(GuidelinesRoutes, UIDesignRoutes, MarketingRoutes, $filter) {

  function init () {
    var service = {stateList: []};
    var states = [MarketingRoutes, UIDesignRoutes, GuidelinesRoutes];

    // Use helper functions to build $stateProvider objects
    // for states (top level) and sections
    angular.forEach(states, function(routes) {
      service.stateList.push(buildState(routes.state));
      
      angular.forEach(routes.sections, function(section) {
        service.stateList.push(buildState(section, routes.state));
      })
    });
    return service;
  }

  // Route to helpers for a section/state $stateProvider object
  function buildState (routes, topState) {
    return (topState)
      ? sectionRoute(topState, routes.section)
      : stateRoute(routes);
  }

  // Build a section $stateProvider object
  function sectionRoute (state, section) {
    var formattedSection = $filter('toSubstate')(section);
    return {
      state: state.toLowerCase() + '.' + formattedSection,
      assets: {
        url: '/' + formattedSection,
        ctrl: null,
        templateUrl: null
      }
    }
  }

  // Build a state $stateProvider object
  function stateRoute (state) {
    var formattedState = state.toLowerCase();
    return {
      state: formattedState,
      assets: {
        url: '/' + formattedState,
        ctrl: state + 'Ctrl as ' + formattedState,
        templateUrl: formattedState + '/_index.html'
      }
    }
  }

  return init();
}

ComponentsModule.factory('RoutesService', RoutesService);