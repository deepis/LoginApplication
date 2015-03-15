'use strict';

app.config(['$routeProvider', function($routeProvider) {
	
	$routeProvider
        .when('/login', {
        	controller: 'LoginCtrl',
            templateUrl: './partials/loginpage.html'
        })
        .when('/homePage', {
        	controller: 'HomeCtrl',
            templateUrl: './partials/HomePage.html'
        })
        .when('/profile', {
        	controller: 'ProfileCtrl',
            templateUrl: './partials/Profile.html'
        })
        .when('/viewPage',{
        	controller: 'ViewCtrl',
        	templateUrl: './partials/nextFile.html'
        })
        .when('/logout',{
        	controller: 'LoginCtrl',
        	templateUrl: './partials/loginpage.html'
        })
        .otherwise({
        	redirectTo: '/login'
       });
    }

]);


/*'use strict';

app.config(['routeProvider',function($routeProvider){
	$routeProvider
		.when('/login',{
			controller: 'LoginCtrl',
			templateUrl: 'viewFile/login.html'
		}).otherwise({
            redirectTo: 'viewFile/login.html'
        });

}])
.run(['$rootScope', '$location', '$cookieStore', '$http',
    function ($rootScope, $location, $cookieStore, $http) {
        // keep user logged in after page refresh
        $rootScope.globals = $cookieStore.get('globals') || {};
        if ($rootScope.globals.currentUser) {
            $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata; // jshint ignore:line
        }
  
        $rootScope.$on('$locationChangeStart', function (event, next, current) {
            // redirect to login page if not logged in
            if ($location.path() !== '/login' && !$rootScope.globals.currentUser) {
                $location.path('/login');
            }
        });
    }]);
*/


