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
    .config(function($httpProvider){
//        $httpProvider.defaults.withCredentials = true;
//        delete $httpProvider.defaults.headers.common['X-Requested-With'];

    })
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
