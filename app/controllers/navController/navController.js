module.exports = function(app) {
   app.controller('navController', function($scope, $route) {
    $scope.$route = $route;
   });
};

