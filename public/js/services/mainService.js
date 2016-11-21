angular.module('personal').service('mainService', function($http){

  this.getCart = function(id){
    console.log(id);
    return $http({
      method: 'GET',
      url: '/cart?id=' + id,
    })
  }

  this.addCart = function(id) {
    console.log(id);
    return $http({
      method: 'POST',
      url: '/cart',
      data: id
    })
  }

  this.deleteCart = function(id) {
  console.log(id);
  return $http({
    method: 'DELETE',
    url: '/cart/' + id
  })
}

this.sumCart = function(id) {
  console.log(id);
  return $http({
    method: 'GET',
    url: '/sum?id=' + id
  })
}

this.updateQuantity = function(id, qty) {
  console.log(id);
  console.log(qty);
  return $http({
    method: 'PUT',
    url: '/cart/' + id,
    data: qty
  })
}

this.changeItemTotal = function(id) {
  console.log(id);
  console.log(qty);
  return $http({
    method: 'PUT',
    url: '/cart/' + id,
    data: qty
  })
}

this.getUser = function(users) {
  console.log(users);


  return $http({
    method: 'GET',
    url: '/user?email=' + users.email,
  })
}

this.addUser = function(users) {
  console.log(users);


  return $http({
    method: 'POST',
    url: '/user/',
    data: users
  })
}

this.changeNamePassword = function(user) {
  console.log(user);
  return $http({
    method: 'PUT',
    url: '/update',
    data: user
  })
}

this.login = function(user) {
  console.log(user);
  return $http({
    method: 'POST',
    url: '/auth/login',
    data: user
  })
}

});
