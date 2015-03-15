
'use strict';

app.factory('profileService',function($http) {
    return {
        getDetails: function() {
           var req = {
               method: 'GET',
               url: 'scripts/data/authenticate.json',
               
           }
           return $http(req);
        },
    } 
});


















