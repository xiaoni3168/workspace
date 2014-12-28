'use strict';

/**
 * @ngdoc function
 * @name angularWorkApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularWorkApp
 */
angular.module('angularWorkApp')
  .controller('MainCtrl',['$scope','publicService', function ($scope,publicService) {
        publicService.getTestData().then(function(data){
            $scope.test = data.data;
           console.log(data);
        });
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }]);
