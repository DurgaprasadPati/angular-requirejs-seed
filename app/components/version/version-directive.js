define(['angular'], function(angular) {
	angular.module('myApp.version.version-directive', [])
	.directive('appVersion', ['version', function(version) {
            'use strict';
            return function(scope, elm, attrs) {
			elm.text(version);
		};
	}]);
});