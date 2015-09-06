/**
 * Created by Durgaprasad on 05-09-2015.
 */

define(['angular'], function(angular) {
    angular.module('myApp.version.header-directive', [])
        .directive('headerDirective', ['version', function(version) {
            'use strict';
            return {
                restrict:'EA',
                scope:{
                    headerDirective:'=headerDirective'
                },
                templateUrl: 'components/version/template/header-template.html',
                link: function (scope, element,attribute) {
                    console.log("header directive"+scope.headerDirective);
                    scope.$watch('headerDirective',function(newValue,oldValue){
                        if(newValue!=oldValue){
                           // scope.render();

                        }
                    });
                }
            };
        }]);
});