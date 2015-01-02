'use strict';

angular.module('angularWorkApp')
    .controller('LoginCtrl',['$scope','$modal','Service',function($scope,$modal,Service){
        var fn = $scope.fn = {};

        fn.login = function() {
            var loginModalCtrl = ['$scope','$modalInstance','Service',function($scope,$modalInstance,Service){
                var md = $scope.md = {};
                Service.getLoginInfo().then(function(result) {
                    console.log(result);
                });
                md.login = function() {
                    var userInfo = {};
                    userInfo.username = $scope.username;
                    userInfo.password = $scope.password;
                    console.log(userInfo);
                    Service.login(userInfo).then(function(result){
                        console.log(result);
                    });
                };
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