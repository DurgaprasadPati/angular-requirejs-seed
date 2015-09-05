/**
 * Created by Durgaprasad on 05-09-2015.
 */
'use strict';

define(['angular'], function(angular) {
    angular.module('myApp.version.header-directive', [])
        .directive('headerDirective', ['version', function(version) {
            return {
                restrict:'EA',
                scope:{},
                templateUrl: 'components/version/template/header-template.html',
                link: function (scope, element,attribute) {
                    console.log("header directive");
                }
            }
        }]);
});