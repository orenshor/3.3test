'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/Register', {
    templateUrl: 'Register/Register.html',
    controller: 'RegisterCtrl'
  });
}])

.controller('RegisterCtrl', [function() {

}]);