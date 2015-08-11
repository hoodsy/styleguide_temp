'use strict';

var ComponentsModule = require('../_index');

/* 
 * @ngInject
 * 
 * Usage Examples:
 * <div dui-truncate ng-bind="someTextExpression"></div>
 * <div dui-truncate>My really long test goes here</div>
 * At the moment, this directive does not support other ways to pass in text
 */
function truncate () {

  return {
    transclude: true,
    restrict: 'A',
    replace: true,
    template: '<div class="truncate" title="{{tooltipText}}" ng-transclude></div>',
    link: linkFn
  };

  function linkFn (scope, element, attrs) {

    addTooltip();

    function addTooltip () {
      if (attrs.ngBind) {
        initNgBindListener();
      }
      else {
        scope.tooltipText = element.text();
      }
    }

    function initNgBindListener () {
      scope.$watch(attrs.ngBind, function ngBindWatchAction (value) {
        scope.tooltipText = value === undefined ? '' : value;
      });
    }

  }

}

ComponentsModule.directive('duiTruncate', truncate);
