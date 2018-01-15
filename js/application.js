'use strict';

var app = angular.module('myApp', [ 'ui.router', 'ngRoute']);
app.config(function($stateProvider) {
	$stateProvider.state('about', {
		url : '/about',
		templateUrl : 'pages/about.html'
	}).state('resume', {
		url : '/resume',
		templateUrl : 'pages/resume.html'
	}).state('work', {
		url : '/work',
		templateUrl : 'pages/work.html'
	}).state('contact', {
		url : '/contact',
		templateUrl : 'pages/contact.html'
	}).state('timeline', {
		url : '/timeline',
		templateUrl : 'pages/timeline.html'
	}).state('otherwise', {
		url : '*path',
		templateUrl : 'pages/about.html'
	})
});
app.controller('aboutController', function($window, $state, $route, $http,
		$rootScope, $scope, $location, $filter) {
	var name = "aniketudare", items;
	$http.get("https://www.instagram.com/" + name + "/?__a=1").success(
			function(data) {
				items = data.user.media.nodes;
				$rootScope.imageList = items;
				console.log(items)
				setTimeout(function() {
					$('.slider').slider();
					$('.carousel').carousel({
						indicators:'true',
						padding:50,
						noWrap:'true',
					});
				}, 1);

			});
});
