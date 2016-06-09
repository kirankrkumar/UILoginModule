'use strict';

/* Services */

var services = angular.module('loginApp.services', ['ngResource']);

services.factory('UserFactory', function ($resource) {
    return $resource('/midLayerloginModule/rest/users', {}, {
        query: {
            method: 'GET',
            params: {},
            isArray: false
        }
    })
    
   
});

services.factory('UserRoles', function ($resource) {
    return $resource('/midLayerloginModule/rest/users/roles', {}, {
        query: {
            method: 'GET',
            params: {},
            isArray: true
        }
    })
    
   
});

services.factory('UserAuth', function ($resource) {
	console.log("it is from loginModule call in serice js:::::");
     return $resource('/midLayerloginModule/rest/users/auth');
});
