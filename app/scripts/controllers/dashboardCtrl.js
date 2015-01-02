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
        $scope.interval = 1000;
        var slides = $scope.slides = [];
        var imageUrls = [
            'Aatrox_Splash_0.jpg',
            'Aatrox_Splash_1.jpg',
            'Aatrox_Splash_2.jpg'
        ];
        slides.push(
            {
                image: '../images/' + imageUrls[0]
            },
            {
                image: '../images/' + imageUrls[1]
            },
            {
                image: '../images/'+imageUrls[2]
            }
        );
    }]);
