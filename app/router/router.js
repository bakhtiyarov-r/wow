"use strict";

module.exports = function(app) {
    app.config(function($routeProvider){
    	$routeProvider
    	   .when('/', {
    	   	   templateUrl: 'templates/task.html',
               controller: "navController",
               activetab: 'task'
    	   })
    	   .when('/finance', {
    	   	   templateUrl: 'templates/finance.html',
               controller: "navController",
               activetab: 'finance'
    	   })
    	   .when('/company', {
    	   	   templateUrl: 'templates/company.html',
               controller: "navController",
               activetab: 'company'
    	   })
    	   .when('/statistic', {
    	   	   templateUrl: 'templates/statistic.html',
               controller: "navController",
               activetab: 'statistic'
    	   })
    	   .when('/balance', {
    	   	   templateUrl: 'templates/balance.html',
               controller: "navController",
               activetab: 'balance'
    	   })
    	   .otherwise({
    	   	  redirectTo:'/'
    	   })

    })
};