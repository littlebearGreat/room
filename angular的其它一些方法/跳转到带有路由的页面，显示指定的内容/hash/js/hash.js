// var hash = location.hash;
var app = angular.module('myapp',['ngRoute'])
	.config(['$routeProvider',function($routeProvider) {
		$routeProvider
		.when('/a',{templateUrl:'html/aaa.html'})
		.when('/b',{templateUrl:'html/bbb.html'})
		.when('/c',{templateUrl:'html/ccc.html'})
		.otherwise({redirectTo:location.hash});
	}])
app.controller('hash',['$scope',function($scope){

}])