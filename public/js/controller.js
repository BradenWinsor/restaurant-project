angular.module('foodApp').controller('foodController', function($scope, foodService){
  $(document).ready(function(){
      $("#carousel").carousel();
  });

    foodService.getMenu() 
    .then(function (response) {
      console.log(response)
      $scope.menu = response.data;
    })




  




})
