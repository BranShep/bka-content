angular.module('personal')
  .controller('loginCtrl', function($scope, $stateParams, mainService, $location) {
$scope.poo='account'

$scope.currentUser = localStorage.getItem('currentUser');
console.log($scope.currentUser);
    $scope.authenticate = function(provider) {
        $auth.authenticate(provider);
      };

//User login with email and password
$scope.login = function(email, password){
      var user = {
        email: email,
        password: password
      };

      console.log(user);
        mainService.login(user).then(function(response) {
          console.log(response);
          localStorage.setItem('currentUser',response.data[0]);
          $scope.currentUser = localStorage.getItem('currentUser');
          console.log($scope.currentUser);
          $location.path('/account/');
        })
}
    $scope.addUser = function(email, password){
      console.log(email);
      console.log(password);
      var users = {
        email: email,
        password: password
      };
      if(email === undefined || password === undefined){
        $scope.showRegisterError = true;
      }else{

      mainService.addUser(users).then(function(response){
        console.log(response);
        localStorage.setItem('currentUser',response.config.data);
        $scope.currentUser = localStorage.getItem('currentUser');
        console.log($scope.currentUser);
        $location.path('/account/');
      })
    }
    }

    $scope.getUser = function(email, password){
      console.log(email);
      console.log(password);
      var users = {
        email: email,
        password: password
      };
      if(email === undefined || password === undefined){
        $scope.showLoginError = true;
      }else{
        $scope.showLoginError = false;
      mainService.getUser(users).then(function(response){

        $scope.user = response.data[0];

        console.log($scope.user);
        if($scope.user === undefined){
          $scope.showUserFound = true;


        }else {
          localStorage.setItem('currentUser',response.data[0]);
          $scope.currentUser = localStorage.getItem('currentUser');
          console.log($scope.currentUser);
          $location.path('/account/');
        }

        console.log($scope.user);

      })
    }
    }

//----- Bootstrap Modal ---------//



  });
