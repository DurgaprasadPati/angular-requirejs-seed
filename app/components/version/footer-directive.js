/**
 * Created by Durgaprasad on 06-09-2015.
 */

define(['angular'], function(angular) {
    angular.module('myApp.version.footer-directive', [])
        .directive('footerDirective', ['version', function(version) {
            'use strict';
            return {
                restrict:'EA',
                scope:{
                    footerDirective:'=footerDirective'
                },
                templateUrl: 'components/version/template/footer-template.html',
                link: function (scope, element,attribute) {
                    console.log("header directive"+scope.footerDirective);
                    scope.$watch('headerDirective',function(newValue,oldValue){
                        if(newValue!=oldValue){
                            // scope.render();

                        }
                    });
                }
            };
        }]);
});