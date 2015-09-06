/**
 * Created by Durgaprasad on 06-09-2015.
 */

define(['angular'], function(angular) {
    angular.module('myApp.version.content-directive', [])
        .directive('contentDirective', ['version', function(version) {
            'use strict';
            return {
                restrict:'EA',
                scope:{
                    contentDirective:'='
                },
                templateUrl: 'components/version/template/content-template.html',
                link: function (scope, element,attribute) {
                    console.log("content directive");
                    scope.$watch('contentDirective',function(newValue,oldValue){
                        if(newValue!=oldValue){
                            // scope.render();

                        }
                    });
                }
            };
        }]);
});