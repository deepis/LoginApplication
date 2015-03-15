'use strict';

app.controller('AppCtrl', ['$scope', function($scope) {

//	$scope.userDetail = {};

//	$scope.isAuthenticated = false;
	
	angular.extend($scope, {
		userDetail : {},
		isAuthenticated : false
	});
	
	$scope.$watch('userDetail', function() {
		$scope.Fullname = $scope.userDetail.Fullname;
	});
}]);
