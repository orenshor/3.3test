'use strict';

// Declare app level module which depends on views, and core components
angular.module('myApp', [
  'ngRoute',
  'myApp.Login',
  'myApp.Register',
  'myApp.version'
]).config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider
      .when('/Login', {
        templateUrl: 'Login/Login.html'

  })
      .otherwise({redirectTo: '/Home'});
}]);
