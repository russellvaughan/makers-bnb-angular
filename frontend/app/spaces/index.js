'use strict';


angular.module('makersbnb.index', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/spaces/index', {
    templateUrl: 'spaces/index.html',
    controller: 'SpacesCtrl'
  });
}])
.controller('SpacesCtrl', ['$scope',function($scope) {
	this.getSpaces = function(){
		return [{id:1, name: "a nice place"}, {id: 2, name:"a horrible place"}];
	};
	$scope.spaces = this.getSpaces()
}]);

