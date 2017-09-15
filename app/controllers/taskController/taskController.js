module.exports = function(app) {
   app.controller('taskController', function($scope, filterFilter, $http) {
    $http.get('task.json').then(function(response) {
        $scope.myData = response.data.task;
        console.log($scope.myData);
    });

    $scope.getCount = function(val){
    	
      return filterFilter( $scope.myData, {status: {new: true}}).length;
      
    }
    
    
    
  });
};

