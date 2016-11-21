angular.module('personal').controller('cartCtrl', function($scope, mainService){
  $scope.pee = 'Angular works';
$scope.currentUser = localStorage.getItem('currentUser');
  $scope.changeItemTotal = function(id, qty, total){
    console.log(total);
    var cartItemTotal = qty * total;
    $scope.updateQuantity(id, qty, cartItemTotal);
    console.log($scope.currentUser.userid);
    $scope.getCart($scope.currentUser.userid);
  }

  $scope.getCart = function(id){
    mainService.getCart(id).then(function(response){
      console.log(response);
      $scope.cart = response.data;
      console.log($scope.cart);

    })
  };

$scope.deleteCart = function(id) {
  console.log(id);

  mainService.deleteCart(id).then(function(response){
    $scope.getCart($scope.currentUser.userid);
    $scope.sumCart($scope.currentUser.userid);
  })
};

$scope.sumCart = function(id) {
  mainService.sumCart(id).then(function(response){
    console.log(response);
    $scope.cartSum = response.data[0].sum;
  })
};

$scope.updateQuantity = function(id, quantity, total) {
  console.log(id);
  console.log(quantity);
  console.log(total);
  var bigTotal = parseFloat(total * quantity);
  var qty = {
    qty: quantity,
    total: total
  }
  mainService.updateQuantity(id, qty).then(function(response){
    $scope.getCart($scope.currentUser.userid);
    $scope.sumCart($scope.currentUser.userid);
  })
};


$scope.buildCustomerBilling = function(first, last, company, email, phone, country, address1, address2, city, state, zip) {
  console.log(first);
  console.log(country);

  var customer = {
    first: first,
    last: last,
    company: company,
    email: email,
    phone: phone,
    country: country,
    address1: address1,
    address2: address2,
    city: city,
    state: state,
    zip: zip
  }

  console.log(customer);
}

if($scope.currentUser === null){
  $scope.checkoutShow = false;
  $scope.totalShow = false;
  $scope.emptyShow = true;
}else{
  $scope.checkoutShow = true;
  $scope.totalShow = true;
  $scope.getCart($scope.currentUser.userid);
  $scope.sumCart($scope.currentUser.userid);
}
// console.log(cartItem);

});
