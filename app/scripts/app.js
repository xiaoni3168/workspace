'use strict';

/**
 * @ngdoc overview
 * @name angularWorkApp
 * @description
 * # angularWorkApp
 *
 * Main module of the application.
 */
angular
  .module('angularWorkApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
