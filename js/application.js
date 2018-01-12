'use strict';

var app = angular.module('myApp', [ 'ui.router', 'ngRoute', 'ngMaterial',
		'ngMessages' ]);
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
	})
	.state('otherwise', {
		url : '*path',
		templateUrl : 'pages/about.html'
	})
});
