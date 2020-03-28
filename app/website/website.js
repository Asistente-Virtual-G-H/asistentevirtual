'use strict';

angular.module('myApp.website', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/website', {
    templateUrl: 'website/website.html',
    controller: 'WebsiteCtrl'
  });
}])

.controller('WebsiteCtrl', [function() {

}]);