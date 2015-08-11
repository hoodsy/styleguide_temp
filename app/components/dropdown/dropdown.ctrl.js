'use strict';

var ComponentsModule = require('../_index');

/**
 * @ngInject
 */
function DuiDropdownController ($scope, $log, $q) {

  var vm = this;

  vm.refresh = refresh;
  vm.options = undefined;

  // $scope.$on('$destroy', destroyHandler);

  function refresh (search) {

    if (!angular.isFunction($scope.getOptions)) {

      $log.error('Must define getOptions via duiDropdown directive "getOptions" attribute');
      return;

    }

    return $scope.getOptions(search)
      .then(
        function(response) {
          vm.options = response;
        },
        function(error) {

          $log.error('Dropdown Refresh Error: ' + error);
          return $q.reject(error);

        }
      );

  }

  function destroyHandler () {
    $scope.$apply(function resetModel () {
      $scope.model = {};
    });
  }

}

ComponentsModule.controller('duiDropdownController', DuiDropdownController);
