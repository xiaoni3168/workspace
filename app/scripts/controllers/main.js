'use strict';

/**
 * @ngdoc function
 * @name angularWorkApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularWorkApp
 */
angular.module('angularWorkApp')
  .controller('MainCtrl',['$scope', function ($scope) {

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }]);
