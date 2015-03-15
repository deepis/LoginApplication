'use strict';

app.controller('MenuCtrl', function($scope,$location){
	
	console.log("Fullname :"+$scope.userDetail.Fullname);
	$scope.Fullname = $scope.userDetail.Fullname;
//	$scope.getUserName = function(){
//		$scope.Fullname = $scope.userDetail.Fullname;
//	}
	
	
    $scope.isActive = function(viewLocation) {
    	return viewLocation === $location.path();
	};

	$scope.classActive = function( viewLocation ) {
		  if( $scope.isActive(viewLocation) ) {
	        return 'active-btn';
	      }
	      else {
	        return 'inactive-btn';
	      }
	    }
});