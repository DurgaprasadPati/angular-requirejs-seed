
define(['angular',
        'components/version/header-directive',
        'components/version/version-directive',
        'components/version/interpolate-filter',
        'components/version/content-directive',
        'components/version/form-directive',
        'components/version/footer-directive'
    ],
    function (angular, versionDirective, interpolateFilter) {
        'use strict';
        angular.module('myApp.version', [
            'myApp.version.interpolate-filter',
            'myApp.version.version-directive',
            'myApp.version.header-directive',
            'myApp.version.content-directive',
            'myApp.version.form-directive',
            'myApp.version.footer-directive'
        ])
            .value('version', '0.3');
    });