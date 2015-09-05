'use strict';

define(['angular',
        'components/version/header-directive',
        'components/version/version-directive',
        'components/version/interpolate-filter',
        'components/version/content-directive',
        'components/version/form-directive',
    ],
    function (angular, versionDirective, interpolateFilter, headerDirective) {
        angular.module('myApp.version', [
            'myApp.version.interpolate-filter',
            'myApp.version.version-directive',
            'myApp.version.header-directive',
            'myApp.version.content-directive',
            'myApp.version.form-directive',
        ])
            .value('version', '0.3');
    });