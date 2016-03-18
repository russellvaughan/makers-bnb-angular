'use strict';


angular.module('makersbnb.index', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/spaces/index', {
    templateUrl: 'spaces/index.html',
    controller: 'SpacesCtrl'
  }).
  	when('/spaces/:spaceId', {
  		templateUrl: 'spaces/details.html',
  		controller: 'DetailsCtrl'
  	});
}])

.controller('SpacesCtrl', ['$scope','$http', function($scope, $http) {
	$scope.getSpaces = function(){
		$http.get('http://localhost:3000/spaces.json').then(function(response){
			$scope.spaces = response.data
	})};

	$scope.space = {}

	$scope.createSpace = function(){
	$http.post('http://localhost:3000/spaces', $scope.space).
		success(function(data) {
			console.log(":)")
			$scope.getSpaces()
		}).error(function(data) {
		});
	};

	$scope.spaces = $scope.getSpaces()

}])


.controller('DetailsCtrl', ['$scope','$http', '$routeParams','$location', function($scope, $http, $routeParams, $location) {
	
	$scope.whichItem = $routeParams.spaceId;
	$scope.space = {}
	$scope.editSpace = function(){
		$http.put('http://localhost:3000/spaces/'+ $routeParams.spaceId, $scope.space).
		success(function(data) {
			console.log(":)")
		}).error(function(data) {
			console.log(":(")
	});
		 $location.path('/index');
	};
		

}]);
