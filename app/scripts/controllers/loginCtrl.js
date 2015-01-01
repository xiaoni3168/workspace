'use strict';

angular.module('angularWorkApp')
    .controller('LoginCtrl',['$scope','$modal',function($scope,$modal){
        var fn = $scope.fn = {};

        fn.login = function() {
            var loginModal = $modal.open({
                scope: $scope,
                backdrop: 'static',
                templateUrl: 'views/modal/loginModal.html',
                show: true
            });
            var scope = loginModal.$scope;
        }
    }]);