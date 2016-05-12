var app = angular.module('app');

app.factory('redditService', function($http){
	var subreddit = "";

	function getReddit(){
		console.log("hello from the service getReddit function!")
		return $http.get("http://reddit.com/r/" + subreddit + "/.json");
	}

	return {
		chooseSub: function(subName){
			subreddit = subName;
		},

		getReddit: getReddit
	};
});