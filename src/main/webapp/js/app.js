'use strict';

// Declare app level module which depends on filters, and services
angular.module('loginApp', ['loginApp.filters', 'loginApp.services', 'loginApp.directives', 'loginApp.controllers']).
    config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view1', {templateUrl: 'partials/login.html', controller: 'loginCtrl'});
        $routeProvider.when('/landingPage', {templateUrl: 'partials/userDashBoard.html', controller: 'userDashBoradCtrl'});
        $routeProvider.otherwise({redirectTo: '/view1'});
    }]);
