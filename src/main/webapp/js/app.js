'use strict';

// Declare app level module which depends on filters, and services
angular.module('loginApp', ['loginApp.filters', 'loginApp.services', 'loginApp.directives', 'loginApp.controllers']).
    config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/login', {templateUrl: 'partials/login.html', controller: 'loginCtrl'});
        $routeProvider.when('/userDashBoard', {templateUrl: 'partials/userDashBoard.html', controller: 'userDashBoradCtrl'});
        $routeProvider.otherwise({redirectTo: '/login'});
    }]);
