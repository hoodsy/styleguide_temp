'use strict';

var ComponentsModule = require('../_index');

/**
 *
 * @description An input field that accepts a search string and renders a list of selectable options accordingly.
 *
 * @param getOptions {function} returns a promise which resolves to the options array
 * @param model {object} the object that persists the selected option
 * @param label {string} the property name of the option object that will be displayed
 * @param placeholder {string} the placeholder text of the dropdown
 * @param icon {string} the icon that will appear next to the dropdown
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
      getOptions: '=',
      model: '=',
      label: '@?optionProperty',
      placeholder: '@?',
      icon: '@?'
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