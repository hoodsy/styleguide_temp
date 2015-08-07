'use strict';

var ComponentsModule = require('../_index');

/**
 * @ngInject
 */
function SectionService() {

  var service = {};

  service.createContent = function (path, title, subsection) {
    title = title.replace(' ', '').toLowerCase();
    var titlePath = path + title + '/' + title + '-';
    var contentList = [];

    for (var i = 0; i < subsection.tabs.length; i++) {
      var tab = subsection.tabs[i].toLowerCase();

      var description;
      if (subsection.tabs[i] === 'API' && subsection.component) {
        description = 'dgeni/' + subsection.component;
      }
      else {
        description = 'markdown/' + titlePath + tab + '.html'
      }

      var content = {
        tab: subsection.tabs[i],
        assets: titlePath + tab + '.html',
        description: description
      };
      contentList.push(content);
    }

    return contentList;
  }
  return service;

}

ComponentsModule.factory('SectionService', SectionService);