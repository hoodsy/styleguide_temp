'use strict';

var MarketingModule = require('../../_index');

/**
 * @ngInject
 */
function ColorsCtrl(ColorsService) {

  // ViewModel
  var vm = this;

  vm.primary = ColorsService.primary;
  vm.grayscale = ColorsService.grayscale;
  vm.signaling = ColorsService.signaling;

}

MarketingModule.controller('ColorsCtrl', ColorsCtrl);