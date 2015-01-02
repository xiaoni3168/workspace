'use strict';

/**
 * @ngdoc function
 * @name angularWorkApp.controller:DashboardCtrl
 * @description
 * # DashboardCtrl
 * Controller of the angularWorkApp
 */
angular.module('angularWorkApp')
    .controller('DashboardCtrl',['$scope', function ($scope) {

        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
    }]);
