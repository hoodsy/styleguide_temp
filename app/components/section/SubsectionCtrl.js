'use strict';

var ComponentsModule = require('../_index');

/**
 * @name SubsectionCtrl
 * @desc
 * 
 * @ngInject
 */
function SubsectionCtrl ($http) {
	var vm = this;

	vm.activeTab = function (tab) {
		vm.inTab = tab;
	};

	vm.getOptions = function(address) {
    var params = {address: address, sensor: false};
    return $http.get(
      'http://maps.googleapis.com/maps/api/geocode/json',
      {params: params}
    ).then(function(response){
      return response.data.results; // note that this promise resolves to the options list
    });
  }
}

ComponentsModule.controller('SubsectionCtrl', SubsectionCtrl);