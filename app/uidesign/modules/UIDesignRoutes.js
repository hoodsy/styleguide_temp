'use strict';

var ComponentsModule = require('../_index');
var content = require('./UIDesignContent');

/**
 * @desc
 * Used for easy access to the content config file,
 * using Angular's dependency injection.
 *
 * @ngInject
 */
function UIDesignRoutes() {

  return content;

}

ComponentsModule.factory('UIDesignRoutes', UIDesignRoutes);