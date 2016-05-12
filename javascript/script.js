var app = angular.module('app',['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: '../choice.html',
		controller: 'chooseController'
	})
	.when('/front', {
		templateUrl: '../subreddit.html',
		controller: 'viewController'
	});
});