angular.module('personal')
    .config(function($stateProvider, $urlRouterProvider) {

        //This is a catch all for our routes
        $urlRouterProvider.otherwise("/");

          $stateProvider
            .state('home', {
              url: '/',
              templateUrl: '/views/home.html',
              controller: 'homeCtrl'
            })
            .state('blog', {
              url:'/blog',
              templateUrl: 'views/blog.html',
              controller: 'mainCtrl'
            })
            .state('shop', {
              url: '/shop',
              templateUrl: 'views/shop.html',
              controller: 'shopCtrl'
            })
            .state('how', {
              url: '/how',
              templateUrl: 'views/how.html',
              controller: 'mainCtrl'
            })
            .state('ecommerce', {
              url: '/ecommerce',
              templateUrl: 'views/ecommerce.html',
              controller: 'mainCtrl'
            })
            .state('about', {
              url: '/about',
              templateUrl: 'views/about.html',
              controller: 'mainCtrl'
            })
            .state('contact', {
              url: '/contact',
              templateUrl: 'views/contact.html',
              controller: 'mainCtrl'
            })
            .state('account', {
              url: '/account/:email',
              templateUrl: 'views/account.html',
              controller: 'accountCtrl'
            })
            .state('cart', {
              url: '/cart',
              templateUrl: 'views/cart.html',
              controller: 'cartCtrl'
            })
            .state('product', {
              url: '/product/:id',
              templateUrl: 'views/product.html',
              controller: 'productCtrl'
            })
            .state('checkout_billing', {
              url: '/checkout_billing',
              templateUrl: 'views/checkout_billing.html',
              controller: 'cartCtrl'
            })
            .state('checkout_order_info', {
              url: '/checkout_order_info',
              templateUrl: 'views/checkout_order_info.html',
              controller: 'cartCtrl'
            })
            .state('checkout_payment_info', {
              url: '/checkout_payment_info',
              templateUrl: 'views/checkout_payment_info.html',
              controller: 'cartCtrl'
            })
            .state('login', {
              url: '/login/:email',
              templateUrl: 'views/login.html',
              controller: 'loginCtrl'
            })
            .state('downloads', {
              url: '/downloads',
              templateUrl: 'views/downloads.html',
              controller: 'mainCtrl'
            })
            .state('orders', {
              url: '/orders',
              templateUrl: 'views/orders.html',
              controller: 'mainCtrl'
            })
            .state('addresses', {
              url: '/addresses',
              templateUrl: 'views/addresses.html',
              controller: 'loginCtrl'
            })
            .state('account_details', {
              url: '/account_details',
              templateUrl: 'views/account_details.html',
              controller: 'mainCtrl'
            })
});
