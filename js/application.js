'use strict';

var app = angular.module('myApp', [ 'ui.router', 'ngRoute' ]);
var colors = ['red','pink','purple','deep','indigo','blue','light-blue','cyan','teal','green','light-green','lime','yellow','amber','orange','deep-orange','brown','grey','blue-grey'];
function randColor(){
	return colors[Math.floor(Math.random() * colors.length)];
}
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
app.run(function($rootScope) {
	$rootScope.$on('$stateChangeSuccess', function() {
		document.body.scrollTop = 0;
	});
});
app.controller('workController', function($window, $http, $rootScope, $scope,
		$filter) {
	//$scope.color = colors[Math.floor(Math.random() * colors.length)];
	$http.get("https://api.github.com/users/udareaniket/repos").success(
			function(data, status, headers, config) {
				data.sort(function(a, b) {
					return Math.abs(new Date(b.updated_at)
							- new Date(a.updated_at));
				});
				$scope.gitList = data;
				console.log(data)
				var today = new Date();
				
				angular.forEach($scope.gitList, function(value, key) {
					value.color=randColor();
					var updated = new Date(value.updated_at);
					const utc1 = Date.UTC(today.getFullYear(), today.getMonth(), today.getDate());
					  const utc2 = Date.UTC(updated.getFullYear(), updated.getMonth(), updated.getDate());
					  value.lastDays =Math.floor((utc1 - utc2) / (1000 * 60 * 60 * 24));
				});
				setTimeout(function() {
					$('.slider').slider();
					$('.carousel').carousel({
						indicators : 'true',
						padding : 50,
					});
				}, 1);
			});
	$scope.go = function(item) {
		$window.location.href = item.owner.html_url;
	}
});
app
		.controller(
				'aboutController',
				function($window, $state, $route, $http, $rootScope, $scope,
						$location, $filter) {
					var name = "aniketudare", items;
					$http
							.get("https://www.instagram.com/" + name)
							.success(
									function(data) {
										data = JSON
												.parse(data
														.split("window._sharedData = ")[1]
														.split(";</script>")[0]).entry_data.ProfilePage[0].graphql;
										items = data.user.edge_owner_to_timeline_media.edges;
										$rootScope.imageList = items;
										setTimeout(function() {
											$('.slider').slider();
											$('.carousel').carousel({
												indicators : 'true',
												padding : 50,
												noWrap : 'true',
											});
										}, 1);

									});
				});
