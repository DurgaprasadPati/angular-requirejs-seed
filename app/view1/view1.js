'use strict';
define([
    'angular',
    'angularRoute'
], function(angular) {
    angular.module('myApp.view1', ['ngRoute'])
        .config(['$routeProvider', function($routeProvider) {
            $routeProvider.when('/view1', {
                templateUrl: 'view1/view1.html',
                controller: 'View1Ctrl'
            });
        }])
        .controller('View1Ctrl',['$scope','$log','loadPageData','$q',function($scope, $log,loadPageData,$q) {
            $log.log("inside the service");
            loadPageData.promiseToHaveData().then(function(data){
                    $log.log("loding json");
                    $scope.pageData=data;
                    //$log.log($scope.pageData);
                },
                function(data){
                    $log.log("unable to load json");
                });
        }])
        .service('loadPageData', ['$http','$log','$q' , function($http,$log,$q) {
            this.promiseToHaveData = function() {
                var defer = $q.defer();
                $http.get('./stubs/data/loginPageconfig.json')
                    .success(function(data,status) {
                        // angular.extend(_this, data);
                        defer.resolve(data);
                    })
                    .error(function(data,msg) {
                        defer.reject('could not find someFile.json');
                    });

                return defer.promise;
            }
        }]);
});

