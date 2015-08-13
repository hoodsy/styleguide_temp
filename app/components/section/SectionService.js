'use strict';

var ComponentsModule = require('../_index');

/**
 * @ngInject
 */
function SectionService($filter) {

  var service = {};

  /**
   * @description 
   * Creates filepaths for each subsection's content, primarily
   * .html templates and markdown files.
   *
   * @param path {string}
   * Path to files in a given section (e.g. uidesign/components/inputs)
   * @param title {string}
   * Formatted subsection title (e.g. Gray Scale -> grayscale)
   * @param subsection {object}
   * Subsection object - TODO provide a more specific argument
   *
   * @returns contentList {array}
   * An array of content objects. Each content object has a tab name,
   * assets filepath, and description filepath.
  **/
  service.createContent = function (path, title, subsection) {
    // title = $filter('toSubstate')(title);
    var titlePath = path + title + '/';
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
      var assets;
      if (subsection.shareExample) assets = titlePath + 'example.html';
      else assets = titlePath + tab + '.html';

      var content = {
        tab: subsection.tabs[i],
        assets: assets,
        description: description
      };
      contentList.push(content);
    }
    return contentList;
  }

  /**
   * @description 
   * Attaches content filepaths to a section object for each subsection.
   *
   * @param section {string}
   * Unformatted title of section
   * @param sections {array}
   * Array of section objects (from *Content.js file)
   *
   * @returns filledSections {object}
   * Object containing section objects populated with content filepaths
  **/
  service.attachContent = function (section, sections) {
    var filledSections = {};
    section = $filter('toSubstate')(section);

    angular.forEach(sections, function(routes){
      var sectionTitle = $filter('toSubstate')(routes.section);
      var path = section + '/components/' + sectionTitle + '/';
      filledSections[sectionTitle] = {};
      filledSections[sectionTitle].title = sectionTitle;

      angular.forEach(routes.subsections, function(subsection){
        var subsectionTitle = $filter('toSubstate')(subsection.title);
        filledSections[sectionTitle][subsectionTitle] = {};
        filledSections[sectionTitle][subsectionTitle].title = subsection.title;
        filledSections[sectionTitle][subsectionTitle].tabs = subsection.tabs;
        filledSections[sectionTitle][subsectionTitle].content = service.createContent(path, subsectionTitle, subsection);
      });
    });
    return filledSections;
  }

  return service;

}

ComponentsModule.factory('SectionService', SectionService);