'use strict';

var angular = require('angular');
var bulk = require('bulk-require');

function routes ($stateProvider) {
	var path = 'marketing/components/';

	$stateProvider
	.state('marketing.introduction', {
		url: '/introduction',
		templateUrl: path + 'introduction/_introduction.html'
	})

	.state('marketing.colors', {
		url: '/colors',
		controller: 'ColorsCtrl as colors',
		templateUrl: path + 'colors/_colors.html'
	});
}

module.exports = angular.module('app.marketing', []);
angular.module('app.marketing').config(routes);

bulk(__dirname, ['./**/!(*_index|*.spec).js']);