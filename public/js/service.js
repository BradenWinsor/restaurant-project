angular.module('foodApp').service('foodService', function($http){
  
this.getMenu = function(getMenu) {
    return $http({
        method: 'GET',
        url: '/api/getmenu',
    })
}

})
