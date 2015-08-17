'use strict';

// Dependencies
var fs     = require('fs');
var gulp   = require('gulp');
var touch  = require('touch');
var mkdirp = require('mkdirp');
var config = require('../config');

// Content
var appPath   = '../../app/';
var uidesign  = require(appPath+'uidesign/modules/UIDesignContent');
var marketing = require(appPath+'marketing/modules/MarketingContent');
// var guidelines = require(appPath+'guidelines/modules/GuidelinesContent');

gulp.task('generate', function() {
	
	var states = [marketing, uidesign];
	states.forEach(function(state) {

		var shareExample = shouldShareExample(state.state);
		state.sections.forEach(function(section) {
			
			var statePath = 'app/' + state.state + '/components/';
			section.subsections.forEach(function(subsection) {
				var sectionTitle    = toStateFormat(section.section);
				var subsectionTitle = toStateFormat(subsection.title);
				var path = statePath + sectionTitle + '/' + subsectionTitle;
				scaffoldSubsection(path, subsection.tabs, shareExample);				
			});
		});
	})
	
	/**
	 * Generate task helpers
	**/

	// Share example html template if not in Marketing
	function shouldShareExample (state) {
		return (state === 'Marketing')
			? false
			: true;
	}

	// Not Formatted -> notformatted
	function toStateFormat (title) {
		return title.replace(' ', '').toLowerCase();
	}

	// Create section folder (if doesn't exist)
	// Create empty markdown / html templates
	function scaffoldSubsection (path, tabs, shareExample) {			
		mkdirp(path, function (err) {
			if (err) { console.log(err); return; }
			// Create shared html example template
			if (shareExample) touch(path + '/example.html');

			// Create markdown / html files for each tab
			tabs.forEach(function(tab) {
				tab = tab.toLowerCase();
				if (tab != 'api')  touch(path + '/' + tab + '.md');
				if (!shareExample) touch(path + '/' + tab + '.html');
			});
		});
	}

});

