'use strict';

angular.module('angularWorkApp')
    .controller('LoginCtrl',['$scope','$modal',function($scope,$modal){
        var fn = $scope.fn = {};

        fn.login = function() {
            var loginModalCtrl = ['$scope','$modalInstance',function($scope,$modalInstance){
                var md = $scope.md = {};
                md.hide = function() {
                    console.log('a');
                    $modalInstance.dismiss('cancel');
                }
            }];

            var loginModal = $modal.open({
                controller: loginModalCtrl,
                backdrop: 'static',
                templateUrl: 'views/modal/loginModal.html',
                show: true
            });
        }
    }]);