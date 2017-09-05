'use strict';

angular.module("foodApp", ['ui.router']).config(["$urlRouterProvider", "$stateProvider", function ($urlRouterProvider, $stateProvider) {

  $urlRouterProvider.otherwise('home');

  $stateProvider.state('home', {
    url: "/home",
    templateUrl: './templates/home.html'
  }).state('about', {
    url: '/about',
    templateUrl: './templates/about.html'
  }).state('order', {
    url: '/order',
    templateUrl: './templates/order.html'
    // controller: 'ordercontroller'
  }).state('admin', {
    url: '/admin',
    templateUrl: './templates/admin.html'
  }).state('menu', {
    url: '/menu',
    templateUrl: './templates/menu.html',
    controller: 'foodController'
  });

  jQuery('option').mousedown(function (e) {
    e.preventDefault();
    jQuery(this).toggleClass('selected');

    jQuery(this).prop('selected', !jQuery(this).prop('selected'));
    return false;
  });
}]);
'use strict';

angular.module('foodApp').controller('foodController', ["$scope", "foodService", function ($scope, foodService) {
  $(document).ready(function () {
    $("#carousel").carousel();
  });

  $scope.showPopover = function () {
    $scope.popoverIsVisable = !$scope.popoverIsVisible;
    console.log("show");
  };
  $scope.hidePopover = function () {
    $scope.popoverIsVisable = false;
  };

  $scope.showPopover2 = function () {
    $scope.popoverIsVisable2 = !$scope.popoverIsVisible;
    console.log("show");
  };
  $scope.hidePopover2 = function () {
    $scope.popoverIsVisable2 = false;
  };

  $scope.showPopover3 = function () {
    $scope.popoverIsVisable3 = !$scope.popoverIsVisible;
    console.log("show");
  };
  $scope.hidePopover3 = function () {
    $scope.popoverIsVisable3 = false;
  };

  $scope.showPopover4 = function () {
    $scope.popoverIsVisable4 = !$scope.popoverIsVisible;
    console.log("show");
  };
  $scope.hidePopover4 = function () {
    $scope.popoverIsVisable4 = false;
  };

  $scope.showPopover5 = function () {
    $scope.popoverIsVisable5 = !$scope.popoverIsVisible;
    console.log("show");
  };
  $scope.hidePopover5 = function () {
    $scope.popoverIsVisable5 = false;
  };

  $scope.showPopover6 = function () {
    $scope.popoverIsVisable6 = !$scope.popoverIsVisible;
    console.log("show");
  };
  $scope.hidePopover6 = function () {
    $scope.popoverIsVisable6 = false;
  };

  $scope.showPopover7 = function () {
    $scope.popoverIsVisable7 = !$scope.popoverIsVisible;
    console.log("show");
  };
  $scope.hidePopover7 = function () {
    $scope.popoverIsVisable7 = false;
  };

  $scope.showPopover8 = function () {
    $scope.popoverIsVisable8 = !$scope.popoverIsVisible;
    console.log("show");
  };
  $scope.hidePopover8 = function () {
    $scope.popoverIsVisable8 = false;
  };

  $scope.showPopover9 = function () {
    $scope.popoverIsVisable9 = !$scope.popoverIsVisible;
    console.log("show");
  };
  $scope.hidePopover9 = function () {
    $scope.popoverIsVisable9 = false;
  };

  $scope.showPopover10 = function () {
    $scope.popoverIsVisable10 = !$scope.popoverIsVisible;
    console.log("show");
  };
  $scope.hidePopover10 = function () {
    $scope.popoverIsVisable10 = false;
  };

  $scope.showPopover11 = function () {
    $scope.popoverIsVisable11 = !$scope.popoverIsVisible;
    console.log("show");
  };
  $scope.hidePopover11 = function () {
    $scope.popoverIsVisable11 = false;
  };

  $scope.showPopover12 = function () {
    $scope.popoverIsVisable12 = !$scope.popoverIsVisible;
    console.log("show");
  };
  $scope.hidePopover12 = function () {
    $scope.popoverIsVisable12 = false;
  };

  $scope.showPopover13 = function () {
    $scope.popoverIsVisable13 = !$scope.popoverIsVisible;
    console.log("show");
  };
  $scope.hidePopover13 = function () {
    $scope.popoverIsVisable13 = false;
  };
}]);
"use strict";
'use strict';

angular.module('foodApp').service('foodService', ["$http", function ($http) {

    this.addDish = function (addDish) {
        return $http({
            method: 'POST',
            url: '/api/addDish',
            data: addDish
        });
    };
}]);
//# sourceMappingURL=maps/bundle.js.map
