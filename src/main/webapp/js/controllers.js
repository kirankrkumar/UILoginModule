'use strict';

/* Controllers */


var app = angular.module('loginApp.controllers', []);


// Clear browser cache (in development mode)
//
// http://stackoverflow.com/questions/14718826/angularjs-disable-partial-caching-on-dev-machine
app.run(function ($rootScope, $templateCache) {
    $rootScope.$on('$viewContentLoaded', function () {
        $templateCache.removeAll();
    });
});


app.controller('userDashBoradCtrl', ['$scope', '$window', 'UserFactory', 'UserAuth', function ($scope, $window, UserFactory, UserAuth) {
    $scope.bla = 'bla from User Dash Board controller';
}]);


app.controller('loginCtrl', ['$scope', '$window', 'UserRoles', 'UserAuth', function ($scope, $window, UserRoles, UserAuth) {
	$scope.bla = 'bla from Login controller';
	
	$scope.roles = {};
    
	var credentials = {
	          username: this.username,
	          password: this.password
	      };
	
	$scope.user = {
			credentials: "",
			role: ""
	};
	
	$scope.loginAuth = function(user){
			UserAuth.save(user,function(response){});
	}
}]);
