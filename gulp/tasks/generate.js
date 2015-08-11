'use strict';

// Dependencies
var fs     = require('fs');
var gulp   = require('gulp');
var touch  = require('touch');
var mkdirp = require('mkdirp');
var config = require('../config');

// Content
var appPath = '../../app/';
var marketing = require(appPath+'marketing/modules/MarketingContent');
var uidesign = require(appPath+'uidesign/modules/UIDesignContent');
// var guidelines = require(appPath+'guidelines/modules/GuidelinesContent');

gulp.task('generate', function() {
	
	var states = [marketing, uidesign];

	states.forEach(function(state) {

		if (state.state === 'Marketing') {
	  	var defaultTabs = ['Examples', 'Downloads', 'Usage'];
		}
		else {
			var defaultTabs = ['API', 'Code', 'Usage'];
		}

		state.sections.forEach(function(section) {
			var statePath = 'app/'+state.state+'/components/';

			section.subsections.forEach(function(subsection) {
				// Make section directories if they don't exist
				var formattedTitle = subsection.title.replace(' ', '').toLowerCase();
				var formattedSection = section.section.replace(' ', '').toLowerCase();
				var path = statePath + formattedSection + '/' + formattedTitle;
				mkdirp(path, function (err) {

					if (err) console.log(err);
					else {
						// Create example html template
						// touch(path + '/' + 'example.html');
						subsection.tabs.forEach(function(tab) {					
							// Create new markdown files
							tab = tab.toLowerCase();
							if (tab != 'api') touch(path + '/' + tab + '.md');
							touch(path + '/' + tab + '.html');
						});
					}
				});
			});
		});
		
	})


});

