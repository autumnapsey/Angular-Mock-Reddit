var app = angular.module('app');

app.controller('chooseController', function($scope, redditService, $location){
	$scope.goToSub = function(subreddit){
		redditService.chooseSub(subreddit);
		$location.path('/front');
	};
});