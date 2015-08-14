'use strict';

var ComponentsModule = require('../_index');

/**
 * @ngInject
 */
function SectionService($filter) {

  var service = {};


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
      var config = {
        section: sectionTitle, 
        path: section + '/components/' + sectionTitle + '/'
      };
      filledSections[sectionTitle] = attachSection(config, routes);
    });

    return filledSections;
  }

  /**
   * attachContent Helpers
  **/

  // Attach subsection content paths to section
  function attachSection (config, routes) {
    var sectionContent = attachSubsections(config.path, routes, {});
    sectionContent.title = config.section;
    return sectionContent;
  }

  // Attach subsection content paths to object
  function attachSubsections (path, routes, sectionContent) {

    angular.forEach(routes.subsections, function(subsection){
      var subsectionTitle = $filter('toSubstate')(subsection.title);
      sectionContent[subsectionTitle] = {
        title: subsection.title,
        tabs: subsection.tabs,
        content: createContent(path, subsectionTitle, subsection)
      };
    });

    return sectionContent;
  }

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
  function createContent (path, title, subsection) {
    var titlePath = path + title + '/';
    var contentList = [];

    for (var i = 0; i < subsection.tabs.length; i++) {
      contentList.push(getContent(subsection.tabs[i], titlePath, subsection));
    }

    return contentList;
  }

  /**
   * createContent Helpers
  **/

  // Return content object
  function getContent (tab, path, subsection) {
    return {
      tab: tab,
      assets: getAssets(tab.toLowerCase(), path, subsection.shareExample),
      description: getDescription(tab.toLowerCase(), path, subsection.component)
    };
  }

  // Build description (markdown) path
  function getDescription (tab, path, component) {
    return (tab === 'api' && component)
      ? 'dgeni/' + component
      : 'markdown/' + path + tab + '.html';
  }

  // Build assets (html) path
  function getAssets (tab, path, shareExample) {
    return (shareExample)
      ? path + 'example.html'
      : path + tab + '.html';
  }


  return service;

}

ComponentsModule.factory('SectionService', SectionService);