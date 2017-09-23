'use strict';

/**
 * @ngdoc overview
 * @name ticketBookingAppApp
 * @description
 * # ticketBookingAppApp
 *
 * Main module of the application.
 */
angular
  .module('ticketBookingAppApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider,$httpProvider) {
    
    $httpProvider.defaults.useXDomain = true;
    $httpProvider.defaults.withCredentials = true;
    delete $httpProvider.defaults.headers.common["X-Requested-With"];
    $httpProvider.defaults.headers.common["Accept"] = "application/json";
    $httpProvider.defaults.headers.common["Content-Type"] = "application/json";

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/screens', {
        templateUrl: 'views/screen.html',
        controller: 'ScreenCtrl',
        controllerAs: 'screen'
      })
      .when('/book/:id', {
        templateUrl: 'views/about.html',
        controller: 'BookCtrl',
        controllerAs: 'book'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

  
