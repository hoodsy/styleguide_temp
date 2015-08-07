'use strict';

var ComponentsModule = require('../_index');

/**
 * 
 * This is my API doc, in the js. more description
 *
 * @ngInject
 */
function duiDropdownDirective () {

  return {
    restrict: 'E',
    templateUrl: 'components/dropdown/dropdown.html',
    controller: 'duiDropdownController',
    controllerAs: 'vm',
    scope: {
      getOptions: '=', // a function that returns a promise which resolves to the options array
      model: '=', // the object that persists the selected option
      label: '@?optionProperty', // the property name of the option object that will be displayed
      placeholder: '@?', // the placeholder text of the dropdown
      icon: '@?' // the icon that will appear next to the dropdown
    }
  };

  function templateFn (tElem, tAttrs) {

    if (tAttrs.hasOwnProperty('customTemplateUrl')) {
      return tAttrs.customTemplateUrl;
    }

    return 'datto_ui_library/dropdown/dropdown.html';

  }

}

ComponentsModule.directive('duiDropdown', duiDropdownDirective);