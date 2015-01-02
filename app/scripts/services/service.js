'use strict';

angular.module('angularWorkApp')
    .service('Service',['$http',function($http){
        this.getLoginInfo = function () {
            return $http.get('http://localhost:8081/userInfo/loginInfo').then(function(result){
                return result;
            });
        };
        this.login = function(userInfo) {
            return $http.get('http://localhost:8081/userInfo/verfiy/'+userInfo.username+'/'+userInfo.password).then(function(result){
                return result;
            });
        }
    }]);