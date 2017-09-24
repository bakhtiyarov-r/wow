"use strict";

export default function Router(app) {
    app.config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

    	$routeProvider
    	   .when('/', {
    	   	   template: '<task-component></task-component>',
               activetab: 'task'
    	   })
    	   .when('/finance', {
    	   	   template: '<finance-component></finance-component>',
               activetab: 'finance'
    	   })
    	   .when('/company', {
    	   	   template: '<company-component></company-component>',
               activetab: 'company'
    	   })
    	   .when('/statistic', {
    	   	   template: '<statistic-component></statistic-component>',
               activetab: 'statistic'
    	   })
    	   .when('/balance', {
    	   	   template: '<balance-component></balance-component>',
               activetab: 'balance'
    	   })
    	   .otherwise('/');

    }
  ])
};