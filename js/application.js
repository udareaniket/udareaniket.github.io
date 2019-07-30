'use strict';
var myApp = angular.module('myApp', []);
$(function() {
	$('[data-toggle="tooltip"]').tooltip()
});
$(document).ready(function(){
    $('#resumeIframe').attr('src', 'https://drive.google.com/file/d/1zvRKL_e0ZzoLsADXpdOB_rXkSAq4WaP9/preview');    
});
myApp.controller('controller', [ '$scope', '$http', function($scope, $http) {
	$scope.projectList = null;
	$http.get('js/projects.json').then(function(response) {
		$scope.projectList = response.data;
	});
} ]);
