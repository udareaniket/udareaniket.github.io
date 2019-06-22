'use strict';
var myApp = angular.module('myApp', []);
$(function() {
	$('[data-toggle="tooltip"]').tooltip()
});

myApp.controller('controller', [ '$scope', '$http', function($scope, $http) {
	$scope.projectList = null;
	$http.get('js/projects.json').then(function(response) {
		$scope.projectList = response.data;
	});
} ]);
