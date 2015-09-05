/**
 * Created by Durgaprasad on 06-09-2015.
 */
'use strict';

define(['angular'], function(angular) {
    angular.module('myApp.version.content-directive', [])
        .directive('contentDirective', ['version', function(version) {
            return {
                restrict:'EA',
                scope:{},
                templateUrl: 'components/version/template/content-template.html',
                link: function (scope, element,attribute) {
                    console.log("content directive");
                }
            }
        }]);
});