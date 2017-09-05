(function() {
	'use strict';

	angular
		.module('kaligoApp.assignment', ['ngRoute', 'ngAnimate', 'ngSanitize', 'ngMaterial', 'ui.bootstrap', 'rzModule', 'app.svc', 'assignment.ftr', 'assignment.mod'])

		.config(['$routeProvider', function($routeProvider) {
			$routeProvider.when('/assignment', {
				templateUrl: 'assignment/assignment.html',
				controller: 'assignmentCtrl',
				controllerAs: 'assignmentCtrl'
			});
		}]);
})();