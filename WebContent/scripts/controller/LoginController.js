'use strict';

app.controller('LoginCtrl', function($scope, $location, $window,loginService) {	
	
    $scope.isAuthenticated = false;
   
    $scope.login = function () {
    	
    	var username = $scope.username;
    	console.log(username);
    	var password = $scope.password;
    	
    	if(!username){
    		$scope.validationError = "Username cannot be empty";
    		return;
    	}else if(username && password){
    		loginService.authenticate().success(function(data,status){
    			if(!data) 
    				return;
    			else{
    				for(var i=0;i<data.length;i++){
    				if(data[i].UserName == username){
    					$scope.isAuthenticated = true;
    					$scope.userDetail.auth=true;
    					$scope.userDetail.Fullname = data[i].FullName;
    					$window.sessionStorage.username=username;
    					
        				$location.path('/homePage');
    				}
    				else{
    					$scope.validationError = 'Register their details';
    				}
    				}
    				
    			}
    		}).error(function(data,status){
    			$scope.isAuthenticated = false;
    			delete $window.sessionStorage.token;
                $scope.validationError = 'Error: Invalid username or password';

    		});
    	}
    };

    $scope.logout = function () {
        $scope.isAuthenticated = false;
        delete $window.sessionStorage.token;
        $location.path('/login');
    };
});


app.controller('ViewCtrl', function($scope, $location, $window,viewService) {
	
	viewService.displaydata().success(function(data,status){
		if(!data) 
			return;
		else{
			for(var i=0;i<data.length;i++){
				var username = $window.sessionStorage.username;
				if(data[i].UserName == username){
					console.log(data[i]);
					$scope.data = data[i];
					return;
				}else{
					$scope.data = "No data available";
    				console.log('No data available');
				}
			}
			
		}
	}).error(function(data,status){
		
	});

});
