angular.module("foodApp", ['ui.router'])
.config(function($urlRouterProvider, $stateProvider){

  $urlRouterProvider.otherwise('home');

    $stateProvider
      .state('home', {
        url: "/home",
        templateUrl: './templates/home.html'
      })

      .state('about', {
        url: '/about',
        templateUrl: './templates/about.html'
      })

      .state('order', {
        url: '/order',
        templateUrl: './templates/order.html',
          // controller: 'ordercontroller'
      })

      .state('admin', {
        url: '/admin',
        templateUrl: './templates/admin.html'
      })

      .state('menu', {
        url: '/menu',
        templateUrl: './templates/menu.html',
        controller: 'foodController'
      })

      jQuery('option').mousedown(function(e) {
          e.preventDefault();
          jQuery(this).toggleClass('selected');

          jQuery(this).prop('selected', !jQuery(this).prop('selected'));
          return false;
      })
});
