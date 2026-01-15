'use strict';
var myApp = angular.module('myApp', []);
$(document).ready(function(){
	$('[data-toggle="tooltip"]').tooltip();
    $('#resumeIframe').attr('src', 'drive.google.com/file/d/1TTxDOd1ouJm2mTvv7VvV6AKkvIMXBhXT/preview');
    $('#resumeIframe').attr('width', $("#quickDiv").width()*0.75);
    $('#resumeIframe').attr('height', $("#quickDiv").width()*0.75);
    window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
	ga('create', 'UA-114286060-1', 'auto');
	ga('send', 'pageview');
});
myApp.controller('controller', [ '$scope', '$http', function($scope, $http) {
	$scope.projectList = null;
	$http.get('js/projects.json').then(function(response) {
		$scope.projectList = response.data;
	});
} ]);
