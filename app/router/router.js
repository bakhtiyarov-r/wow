"use strict";

module.exports = function(app) {
    app.config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

    	$routeProvider
    	   .when('/', {
    	   	   template: '<task-component></task-component>'
    	   })
    	   .when('/finance', {
    	   	   template: '<finance-component></finance-component>'
    	   })
    	   .when('/company', {
    	   	   template: '<company-component></company-component>'
    	   })
    	   .when('/statistic', {
    	   	   template: '<statistic-component></statistic-component>'
    	   })
    	   .when('/balance', {
    	   	   template: '<balance-component></balance-component>'
    	   })
    	   .otherwise('/');

    }
  ])
};