"use strict";

export default function Task(app){
	app.component('taskComponent', {
	templateUrl: './task.html',
	controller: function($scope, $http, filterFilter) {
       $http.get('task.json').then(function(response) {
         $scope.myData = response.data.task;

         $scope.getCount = function(val){         
             return filterFilter( $scope.myData, {status: val}).length;      
           };
         
       });      
    
     }
  })
}