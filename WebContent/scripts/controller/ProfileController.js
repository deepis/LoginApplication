'use strict';


app.controller('ProfileCtrl', function($scope, $location, $window,profileService) {
	
	$scope.gender = 'Male';
	
	$scope.editProfile=function(){
		$( "#usernameTxt" ).toggle();
		$( "#userNameLbl" ).toggle();
		$( "#emailid" ).toggle();
		$( "#emaildtxt" ).toggle();
		$( "#phoneno" ).toggle();
		$( "#phonenotxt" ).toggle();
		$("#genderLbl").toggle();
		$("#gendertxtMale").toggle();
		$("#gendertxtFemale").toggle();
		$scope.isDisabled = true;
	};
	
//	$scope.FullName = $scope.userDetail.Fullname;
	profileService.getDetails().success(function(data,status){
		if(!data) 
			return;
		else{
			for(var i=0;i<data.length;i++){
				if(data[i].FullName == $scope.userDetail.Fullname){
					$scope.username = data[i].UserName;;
					$scope.emailid = data[i].Emailid;
					$scope.phoneno = data[i].Phoneno;
					$scope.gender = data[i].Gender;
				}
				}
			
		}
	}).error(function(data,status){
		
	});
	
	
	$scope.save = function(){
		var username = $scope.username;
		var emailid = $scope.emailid;
		var phoneno = $scope.phoneno;
		var gender = $scope.gender;
	}
});
