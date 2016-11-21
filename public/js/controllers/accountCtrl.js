angular.module('personal').controller('accountCtrl', function($scope, mainService, $location, $window){

$scope.currentUser = localStorage.getItem('currentUser');

  $scope.logout = function(){
    window.localStorage.clear();
    $location.path('/login/');
    $scope.currentUser = localStorage.getItem('currentUser');
  }

});
