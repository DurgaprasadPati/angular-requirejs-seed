/* global describe, it, expect, beforeEach, afterEach, module, inject */

define(['app', 'angularMocks'], function(app) {
	describe('myApp.version module', function() {
        'use strict';
		beforeEach(module('myApp.version'));

		describe('app-version directive', function() {
			it('should print current version', function() {
				module(function($provide) {
					$provide.value('version', 'TEST_VER');
				});
				inject(function($compile, $rootScope) {
					var element = $compile('<span app-version></span>')($rootScope);
					expect(element.text()).toEqual('TEST_VER');
				});
			});
		});
	});
});