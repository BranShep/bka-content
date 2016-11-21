angular.module('personal').controller('homeCtrl', function($scope, $window) {

  $scope.$on('$viewContentLoaded', function () {
            $window.scrollTo(0, 0);
        });

  $scope.test = "Hello there Clubber";

  $scope.randomNumberOne = function(){
    var randomNum = Math.floor((Math.random() * 20) + 1);
    return randomNum;
    console.log(randomNum);
  }

  $scope.randomNumberTwo = function(){
    var randomNum = Math.floor((Math.random() * 20) + 1);
    return randomNum;
    console.log(randomNum);
  }

  $scope.randomNumOne = $scope.randomNumberOne();
  $scope.randomNumTwo = $scope.randomNumberTwo();
});
