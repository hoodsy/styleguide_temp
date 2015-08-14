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

		if (state.state === 'Marketing') var shareExample = false;
		else var shareExample = true;

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
						// Create shared html example template
						console.log(shareExample, path)
						if (shareExample) touch(path + '/example.html');

						// Create markdown / html files for each tab
						subsection.tabs.forEach(function(tab) {					
							tab = tab.toLowerCase();
							if (tab != 'api') touch(path + '/' + tab + '.md');
							if (!shareExample) touch(path + '/' + tab + '.html');
						});
					}
				});
			});
		});
	})
});

