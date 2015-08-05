'use strict';

var ComponentsModule = require('../_index');

/**
 * @ngInject
 */
function SectionService() {

  var service = {};

  service.createContent = function (path, title, tabs) {
    title = title.replace(' ', '').toLowerCase();
    var titlePath = path + title + '/' + title + '-';
    var contentList = [];
    for (var i = 0; i < tabs.length; i++) {
      var tab = tabs[i].toLowerCase();
      var content = {
        tab: tabs[i],
        assets: titlePath + tab + '.html',
        description: 'markdown/' + titlePath + tab + '.html'
      };
      contentList.push(content);
    };
    return contentList;
  }
  return service;

}

ComponentsModule.factory('SectionService', SectionService);