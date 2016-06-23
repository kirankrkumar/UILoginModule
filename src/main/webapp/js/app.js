'use strict';

// Declare app level module which depends on filters, and services
angular.module('loginApp', ['loginApp.filters', 'loginApp.services', 'loginApp.directives', 'loginApp.controllers', 'ngCookies']).
    config(['$routeProvider', '$httpProvider', function ($routeProvider, $httpProvider) {
        $routeProvider.when('/login', {templateUrl: 'partials/login.html', controller: 'loginCtrl'});
        $routeProvider.when('/signup', {templateUrl: 'partials/signup.html', controller: 'signupCtrl'});
        $routeProvider.when('/userDashBoard', {templateUrl: 'partials/userDashBoard.html', controller: 'userDashBoradCtrl'});
        $routeProvider.otherwise({redirectTo: '/login'});
        
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
    }]);
