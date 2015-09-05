/**
 * Created by Durgaprasad on 06-09-2015.
 */
'use strict';

define(['angular'], function(angular) {
    angular.module('myApp.version.form-directive', [])
        .directive('formDirective', ['version', function(version) {
            return {
                restrict:'EA',
                scope:{},
                templateUrl: 'components/version/template/form-template.html',
                link: function (scope, element,attribute) {
                    console.log("form directive");
                }
            }
        }]);
});