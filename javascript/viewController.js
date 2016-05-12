var app = angular.module('app');

app.controller('viewController', function($scope, redditService){
	console.log("view controller");
	redditService.getReddit().then(function(response){
		$scope.posts = response.data.data.children;
		console.log(response);
	});
});