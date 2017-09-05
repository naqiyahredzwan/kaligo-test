(function() {
	'use strict';

	angular.module('kaligoApp', [
		'ngRoute',
		'app.svc',
		'util.svc',
		'kaligoApp.assignment',
		'kaligoApp.version',
		'ui.bootstrap'
	])

	.run(function($window, appSvc, utilSvc){
		var parseData = utilSvc.isJson($window.hotelDataJSON) ? JSON.parse($window.hotelDataJSON) : $window.hotelDataJSON;
		appSvc.setData(parseData);
	})

	.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
		$locationProvider.hashPrefix('Kaligo');

		$routeProvider.otherwise({redirectTo: '/assignment'});
	}]);
})();
