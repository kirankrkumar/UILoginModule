'use strict';

/* Services */

var services = angular.module('loginApp.services', ['ngResource']);

services.factory('UserFactory', ['$resource', function ($resource) {
    //$resource() function returns an object of resource class.
	var Url = 'http://localhost\\:8082/SpringRestfulHelloWorldExample/user/signup';
	
    return $resource(
            Url, 
            {},//parameters
            {
                update: {
                      method: 'PUT' // To send the HTTP Put request when calling this custom update method.
                },
                get: {
                      method: 'GET', cache: true // To cache the GET request fired using 'get' method.
                }
            }, 
            {
                stripTrailingSlashes: false
            }
    );
}]);
