angular.module('personal').controller('mainCtrl', function($scope, $window, $location, mainService){
  localStorage.setItem('currentUser', 'Dan');
  $scope.currentUser = localStorage.getItem('currentUser');
  console.log($scope.currentUser);
  $scope.test = 'Angular works';

  $scope.checkLogin = function(){
      $scope.currentUser = localStorage.getItem('currentUser');
    console.log($scope.currentUser);
    if($scope.currentUser !== null){
        $location.path('/account/');
    }else {
        $location.path('/login/');
    }
  }




  if($scope.currentUser !== null) {
    $scope.currentFirstName = $scope.currentUser.firstname;
    $scope.currentLastName = $scope.currentUser.lastname;
    $scope.currentEmail = $scope.currentUser.email;
    $scope.currentPassword;
    $scope.newPassword;
    $scope.confirmPassword;
    $scope.currentCompany = $scope.currentUser.company;
    $scope.currentCountry = $scope.currentUser.country;
    $scope.currentAddress1 = $scope.currentUser.address1;
    $scope.currentAddress2 = $scope.currentUser.address2;
    $scope.currentCity = $scope.currentUser.city;
    $scope.currentState = $scope.currentUser.state;
    $scope.currentZip = $scope.currentUser.zip;
  } else {
    $scope.currentFirstName;
    $scope.currentLastName;
    $scope.currentEmail;
    $scope.currentPassword;
    $scope.newPassword;
    $scope.confirmPassword;
    $scope.currentCompany;
    $scope.currentCountry;
    $scope.currentAddress1;
    $scope.currentAddress2;
    $scope.currentCity;
    $scope.currentState;
    $scope.currentZip;
  }

  $scope.logout = function(){
    window.localStorage.clear();
    $location.path('/login/');
  }



  $scope.slideDown = function(div) {

      $('html,body').animate({
          scrollTop: $(div).offset().top},
          'slow');

  }

  $scope.$on('$viewContentLoaded', function () {
            $window.scrollTo(0, 0);
        });

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

$scope.savedShow = false;
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
    mainService.getUser(users).then(function(response){
      $scope.user = response.data[0];
      localStorage.setItem('currentUser',JSON.stringify(response.data[0]));
      $scope.savedShow = true;
      console.log($scope.currentUser);
      console.log($scope.user);
    })
  }
  }

$scope.changeNamePassword = function(first, last, email, current, newPass) {
  var updatedUser = {
    id: $scope.currentUser.userid,
    first: first,
    last: last,
    email: email,
    current: current,
    new: newPass
  }

  console.log(updatedUser);
  mainService.changeNamePassword(updatedUser).then(function(response){
    console.log(response);
      $scope.getUser(response.config.data.email, response.config.data.new);
      $scope.currentPassword = '';
      $scope.newPassword = '';
      $scope.confirmPassword = '';
  })
}

$scope.refresh = function() {
  location.reload();
}
})
