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


app.controller('userDashBoradCtrl', ['$scope', '$window', 'UserFactory',  function ($scope, $window, UserFactory ) {
    $scope.bla = 'bla from User Dash Board controller';
}]);

app.controller('loginCtrl', ['$scope', '$window', 'UserFactory',  function ($scope, $window, UserFactory ) {
    $scope.bla = 'bla from Login  controller';
}]);

app.controller('signupCtrl', ['$scope', '$window', 'UserFactory', '$location', function ($scope, $window, UserFactory,$location) {
	$scope.bla = 'bla from signup controller';
	
	$scope.register = function(user){
		$scope.dataLoading = true;
		
		UserFactory.save({},user,function(resp, headers){
		      //success callback
		      console.log(resp);
		    },
		    function(err){
		      // error callback
		      console.log(err);
		    });
		
		$scope.dataLoading = false;
	};
	
	
	$scope.go = function(path){
		$location.path(path);
	};
}]);
