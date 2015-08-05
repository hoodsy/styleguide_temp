'use strict';

var UIDesignModule = require('../../_index');

/**
 * @ngInject
 */
function ColorsService() {

  var service = {};
  var path = 'uidesign/components/colors/';

  service.primary = {
  	title: 'Primary',
  	tabs: ['Examples', 'Downloads', 'Usage'],
    content: [
      {
        tab: 'Usage',
        // Despite the same filename, descr is a compiled .md file
        assets: path + 'primary/primary-usage.html',
        description: 'markdown/' + path + 'primary/primary-usage.html'
      },
      {
        tab: 'Downloads',
        assets: path + 'primary/primary-downloads.html'
      },
      {
        tab: 'Examples',
        assets: path + 'primary/primary-examples.html',
      }
    ]
  };

  service.grayscale = {
  	title: 'Gray Scale',
  	tabs: ['Examples', 'Downloads', 'Usage'],
    content: [
      {
        tab: 'Usage',
        assets: path + 'grayscale/grayscale-usage.html',
        description: 'markdown/' + path + 'grayscale/grayscale-usage.html'
      }
    ]
  };

  service.signaling = {
  	title: 'Signaling',
  	tabs: ['Examples', 'Downloads', 'Usage']
  };

  return service;

}

UIDesignModule.factory('ColorsService', ColorsService);