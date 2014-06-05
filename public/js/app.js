'use strict';

angular.module('myApp', ['myApp.services']).
	config(['$routeProvider','$locationProvider', function ($routeProvider,$locationProvider) {
    $routeProvider.
      when('/',{
        templateUrl: 'partials/index',
        controller: IndexCtrl
      }).
      when('/newuser',{
        templateUrl: 'partials/newuser',
        controller: UserCtrl
      }).
      when('/newcause',{
        templateUrl: 'partials/newcause',
        controller: CauseCtrl
      }).
      otherwise({
        redirectTo: '/'
      });
      $locationProvider.html5Mode(true);
  }]);