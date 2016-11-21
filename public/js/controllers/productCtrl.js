angular.module('personal').controller('productCtrl', function($scope, $stateParams, mainService){
  $scope.dan = 'hey dan';
  $scope.quantity = 1;
  $scope.currentUser = localStorage.getItem('currentUser');
  console.log($scope.currentUser);
  $scope.currentUser.cartId = Number($scope.currentUser.cartId);

  $scope.items = [
    {
      id: 1,
      image: '/images/PremiumSEO.jpg',
      title: 'Premium SEO Articles',
      price: '$9.50',
      wordCount: [{option: '100-150 Words - $9.50', price: 9.50.toFixed(2), count: 150}, {option: '200-250 Words - $14.50', price: 14.50.toFixed(2), count: 250} , {option: '300-350 Words - $17.50', price: 17.50.toFixed(2), count: 350}, {option: '400-450 Words - $20.50', price: 20.50.toFixed(2), count: 450}, {option: '500-550 Words - $23.50', price: 23.50.toFixed(2), count: 550}, {option: '600-650 Words - $28.00', price: 28.00.toFixed(2), count: 650}, {option: '700-750 Words - $32.50', price: 32.50.toFixed(2), count: 750}, {option: '800-850 Words - $37.00', price: 37.00.toFixed(2), count: 850}, {option: '900-950 Words - $41.50', price: 41.50.toFixed(2), count: 950}, {option: '1000-1050 Words - $47.50', price: 47.50.toFixed(2), count: 1050}, {option: '1100-1150 Words - $53.50', price: 53.50.toFixed(2), count: 1150}, {option: '1200-1250 Words - $59.50', price: 59.50.toFixed(2), count: 1250}, {option: '1300-1350 Words - $65.50', price: 65.50.toFixed(2), count: 1350}, {option: '1400-1450 Words - $71.50', price: 71.50.toFixed(2), count: 1450},  {option: '1500-1550 Words - $77.50', price: 77.50.toFixed(2), count: 1550}],
      editing: [{option: 'No', price: 0}, {option: 'Yes (1.5 cents/word)', price: 0.015}]
    },
    {
      id: 2,
      image: '/images/BlogPosts.jpg',
      title: 'Branded Blog Posts',
      price: '$15.00',
      wordCount: [{option: '100-150 Words - $9.50', price: 9.50.toFixed(2), count: 150}, {option: '200-250 Words - $14.50', price: 14.50.toFixed(2), count: 250} , {option: '300-350 Words - $17.50', price: 17.50.toFixed(2), count: 350}, {option: '400-450 Words - $20.50', price: 20.50.toFixed(2), count: 450}, {option: '500-550 Words - $23.50', price: 23.50.toFixed(2), count: 550}, {option: '600-650 Words - $28.00', price: 28.00.toFixed(2), count: 650}, {option: '700-750 Words - $32.50', price: 32.50.toFixed(2), count: 750}, {option: '800-850 Words - $37.00', price: 37.00.toFixed(2), count: 850}, {option: '900-950 Words - $41.50', price: 41.50.toFixed(2), count: 950}, {option: '1000-1050 Words - $47.50', price: 47.50.toFixed(2), count: 1050}, {option: '1100-1150 Words - $53.50', price: 53.50.toFixed(2), count: 1150}, {option: '1200-1250 Words - $59.50', price: 59.50.toFixed(2), count: 1250}, {option: '1300-1350 Words - $65.50', price: 65.50.toFixed(2), count: 1350}, {option: '1400-1450 Words - $71.50', price: 71.50.toFixed(2), count: 1450},  {option: '1500-1550 Words - $77.50', price: 77.50.toFixed(2), count: 1550}],
      editing: [{option: 'No', price: 0}, {option: 'Yes (1.5 cents/word)', price: 0.015}]
    },
    {
      id: 3,
      image: '/images/SpecialtyBlogPost.jpg',
      title: 'Specialty Blog Post',
      price: '$27.50',
      wordCount: [{option: '100-150 Words - $9.50', price: 9.50.toFixed(2), count: 150}, {option: '200-250 Words - $14.50', price: 14.50.toFixed(2), count: 250} , {option: '300-350 Words - $17.50', price: 17.50.toFixed(2), count: 350}, {option: '400-450 Words - $20.50', price: 20.50.toFixed(2), count: 450}, {option: '500-550 Words - $23.50', price: 23.50.toFixed(2), count: 550}, {option: '600-650 Words - $28.00', price: 28.00.toFixed(2), count: 650}, {option: '700-750 Words - $32.50', price: 32.50.toFixed(2), count: 750}, {option: '800-850 Words - $37.00', price: 37.00.toFixed(2), count: 850}, {option: '900-950 Words - $41.50', price: 41.50.toFixed(2), count: 950}, {option: '1000-1050 Words - $47.50', price: 47.50.toFixed(2), count: 1050}, {option: '1100-1150 Words - $53.50', price: 53.50.toFixed(2), count: 1150}, {option: '1200-1250 Words - $59.50', price: 59.50.toFixed(2), count: 1250}, {option: '1300-1350 Words - $65.50', price: 65.50.toFixed(2), count: 1350}, {option: '1400-1450 Words - $71.50', price: 71.50.toFixed(2), count: 1450},  {option: '1500-1550 Words - $77.50', price: 77.50.toFixed(2), count: 1550}],
      editing: [{option: 'No', price: 0}, {option: 'Yes (1.5 cents/word)', price: 0.015}]
    },
    {
      id: 4,
      image: '/images/ProductDescriptions.jpg',
      title: 'Product Descriptions',
      price: '$3.50',
      wordCount: [{option: '100-150 Words - $9.50', price: 9.50.toFixed(2), count: 150}, {option: '200-250 Words - $14.50', price: 14.50.toFixed(2), count: 250} , {option: '300-350 Words - $17.50', price: 17.50.toFixed(2), count: 350}, {option: '400-450 Words - $20.50', price: 20.50.toFixed(2), count: 450}],
      editing: [{option: 'No', price: 0}, {option: 'Yes (1.5 cents/word)', price: 0.015}]
    },
    {
      id: 5,
      image: '/images/PageRewrites-1.jpg',
      title: 'Page Rewrites',
      price: '$13.25',
      wordCount: [{option: '100-150 Words - $9.50', price: 9.50.toFixed(2), count: 150}, {option: '200-250 Words - $14.50', price: 14.50.toFixed(2), count: 250} , {option: '300-350 Words - $17.50', price: 17.50.toFixed(2), count: 350}, {option: '400-450 Words - $20.50', price: 20.50.toFixed(2), count: 450}, {option: '500-550 Words - $23.50', price: 23.50.toFixed(2), count: 550}, {option: '600-650 Words - $28.00', price: 28.00.toFixed(2), count: 650}, {option: '700-750 Words - $32.50', price: 32.50.toFixed(2), count: 750}, {option: '800-850 Words - $37.00', price: 37.00.toFixed(2), count: 850}, {option: '900-950 Words - $41.50', price: 41.50.toFixed(2), count: 950}, {option: '1000-1050 Words - $47.50', price: 47.50.toFixed(2), count: 1050}, {option: '1100-1150 Words - $53.50', price: 53.50.toFixed(2), count: 1150}, {option: '1200-1250 Words - $59.50', price: 59.50.toFixed(2), count: 1250}, {option: '1300-1350 Words - $65.50', price: 65.50.toFixed(2), count: 1350}, {option: '1400-1450 Words - $71.50', price: 71.50.toFixed(2), count: 1450},  {option: '1500-1550 Words - $77.50', price: 77.50.toFixed(2), count: 1550}],
      editing: [{option: 'No', price: 0}, {option: 'Yes (1.5 cents/word)', price: 0.015}]
    },
    {
      id: 6,
      image: '/images/WebPages.jpg',
      title: 'Branded Blog Posts',
      price: '$25.00',
      wordCount: [{option: '100-150 Words - $9.50', price: 9.50.toFixed(2), count: 150}, {option: '200-250 Words - $14.50', price: 14.50.toFixed(2), count: 250} , {option: '300-350 Words - $17.50', price: 17.50.toFixed(2), count: 350}, {option: '400-450 Words - $20.50', price: 20.50.toFixed(2), count: 450}, {option: '500-550 Words - $23.50', price: 23.50.toFixed(2), count: 550}, {option: '600-650 Words - $28.00', price: 28.00.toFixed(2), count: 650}, {option: '700-750 Words - $32.50', price: 32.50.toFixed(2), count: 750}, {option: '800-850 Words - $37.00', price: 37.00.toFixed(2), count: 850}, {option: '900-950 Words - $41.50', price: 41.50.toFixed(2), count: 950}, {option: '1000-1050 Words - $47.50', price: 47.50.toFixed(2), count: 1050}, {option: '1100-1150 Words - $53.50', price: 53.50.toFixed(2), count: 1150}, {option: '1200-1250 Words - $59.50', price: 59.50.toFixed(2), count: 1250}, {option: '1300-1350 Words - $65.50', price: 65.50.toFixed(2), count: 1350}, {option: '1400-1450 Words - $71.50', price: 71.50.toFixed(2), count: 1450},  {option: '1500-1550 Words - $77.50', price: 77.50.toFixed(2), count: 1550}],
      editing: [{option: 'No', price: 0}, {option: 'Yes (1.5 cents/word)', price: 0.015}]
    },
    {
      id: 7,
      image: '/images/MetaDescriptions-1.jpg',
      title: 'Meta Descriptions',
      price: '$2.25',
      wordCount: [{option: 'Up to 160 characters - $2.25', price: 2.25.toFixed(2), count: 160}],
      editing: [{option: 'No', price: 0}, {option: 'Yes (1.5 cents/word)', price: 0.015}]
    },
    {
      id: 8,
      image: '/images/SocialMediaPosts.jpg',
      title: 'Social Media Posts',
      price: '$2.50',
      wordCount: [{option: 'Up to 140 characters - $2.50', price: 2.50.toFixed(2), count: 140}],
      editing: [{option: 'No', price: 0}, {option: 'Yes (1.5 cents/word)', price: 0.015}]
    },
    {
      id: 9,
      image: '/images/PressReleases.jpg',
      title: 'Press Releases',
      price: '$42.00',
      wordCount: [{option: '100-150 Words - $9.50', price: 9.50.toFixed(2), count: 150}, {option: '200-250 Words - $14.50', price: 14.50.toFixed(2), count: 250} , {option: '300-350 Words - $17.50', price: 17.50.toFixed(2), count: 350}],
      editing: [{option: 'No', price: 0}, {option: 'Yes (1.5 cents/word)', price: 0.015}]
    },
    {
      id: 10,
      image: '/images/SpecialtyWebPages.jpg',
      title: 'Specialty Web Pages',
      price: '$33.00',
      wordCount: [{option: '100-150 Words - $9.50', price: 9.50.toFixed(2), count: 150}, {option: '200-250 Words - $14.50', price: 14.50.toFixed(2), count: 250} , {option: '300-350 Words - $17.50', price: 17.50.toFixed(2), count: 350}, {option: '400-450 Words - $20.50', price: 20.50.toFixed(2), count: 450}, {option: '500-550 Words - $23.50', price: 23.50.toFixed(2), count: 550}, {option: '600-650 Words - $28.00', price: 28.00.toFixed(2), count: 650}, {option: '700-750 Words - $32.50', price: 32.50.toFixed(2), count: 750}, {option: '800-850 Words - $37.00', price: 37.00.toFixed(2), count: 850}, {option: '900-950 Words - $41.50', price: 41.50.toFixed(2), count: 950}, {option: '1000-1050 Words - $47.50', price: 47.50.toFixed(2), count: 1050}, {option: '1100-1150 Words - $53.50', price: 53.50.toFixed(2), count: 1150}, {option: '1200-1250 Words - $59.50', price: 59.50.toFixed(2), count: 1250}, {option: '1300-1350 Words - $65.50', price: 65.50.toFixed(2), count: 1350}, {option: '1400-1450 Words - $71.50', price: 71.50.toFixed(2), count: 1450},  {option: '1500-1550 Words - $77.50', price: 77.50.toFixed(2), count: 1550}],
      editing: [{option: 'No', price: 0}, {option: 'Yes (1.5 cents/word)', price: 0.015}]
    }
  ];

$scope.showError = false;
$scope.showPleaseLogin = false;

$scope.addCart = function(id, wordCount, editing, img, total, qty, meta, tag, media, stock) {

  console.log(wordCount);
  console.log(editing);
  console.log(media);
  console.log(stock);

  var newMeta;
  var newTag;
  var newMedia;
  var newStock;
  var seoAdd;
  var socialAdd;

  if(meta === 1 || tag === 0.5){
    seoAdd = 'SEO Add-Ons'
  }else {
    seoAdd = null;
  }

  if(media === 1.5 || stock === 4){
    socialAdd = 'Social/Marketing Add-Ons'
  }else {
    socialAdd = null;
  }

  if(meta === 1) {
    newMeta = '- Meta Description +$1.00'
  }else{
    newMeta = null;
  }

  if(tag === 0.5) {
    newTag = '- Title Tag +$0.50'
  }else{
    newTag = null;
  }

  if(media === 1.5) {
    newMedia = '- Social Media Post (up to 140 characters) +$1.50'
  }else{
    newMedia = null;
  }

  if(stock === 4) {
    newStock = '- Stock Image +$4.00'
  }else{
    newStock = null;
  }

  var smallTotal = parseFloat(total);
  var bigTotal = smallTotal * qty;
  console.log(bigTotal);


  if(wordCount === undefined || editing === undefined) {
    $scope.showError = true;
    console.log($scope.showError);
  }else {

    if($scope.currentUser === null){

      $scope.showError = false;
      $scope.showPleaseLogin = true;
    }

    var cartItem = {
        id: id.id,
        cartId: $scope.currentUser.userid,
        title: id.title,
        count: '- ' + wordCount.option || 0,
        edit: '- ' + editing.option || 0,
        total: smallTotal,
        quantity: qty,
        image: id.image,
        bigTotal: bigTotal,
        meta: newMeta,
        tag: newTag,
        media: newMedia,
        stock: newStock,
        seo: seoAdd,
        social: socialAdd
    };
    $scope.shoppingCart = cartItem;
    console.log($scope.shoppingCart);
    mainService.addCart($scope.shoppingCart).then(function(response){
      $scope.cart = response.data;
      $scope.cartShow = true;
      $scope.showError = false;
      console.log($scope.cartShow);
    })
  }
}

$scope.prices = {
  value1: false,
  value2: false,
  value3: false,
  value4: false
};

$scope.bigCount = 0.00;
$scope.dropDownWord = 0.00;
$scope.dropDownEditing = 0.00;
$scope.dropDownEditing;

$scope.setWordCount = function(option) {
  console.log(option);
  $scope.dropDownWord = option.price || 0;
  $scope.bigCount = option.count || 0;
}


$scope.setEditing = function(option) {
  console.log(option);
  $scope.dropDownEditing = option || 0;
}


$scope.productTotal = 0.00;
$scope.optionsTotal= 0.00;
$scope.optionsTotal= $scope.optionsTotal.toFixed(2);
$scope.productTotal= $scope.optionsTotal;

$scope.sumPrices = function(prices) {
  console.log(prices);
  $scope.optionsTotal = 0;
  for(var i in prices) {
    if(prices.hasOwnProperty(i)){
      $scope.optionsTotal += prices[i];
    }
  }
  $scope.optionsTotal = $scope.optionsTotal.toFixed(2);
  $scope.productTotal = Number($scope.optionsTotal) + Number($scope.dropDownWord) + (Number($scope.dropDownEditing) * Number($scope.bigCount));
  $scope.productTotal = $scope.productTotal.toFixed(2);
}




  $scope.itemById = Number($stateParams.id);


  $scope.getSpecificProduct = function(id) {
    for(var i = 0; i < $scope.items.length; i++){
      if(id === $scope.items[i].id){
        $scope.specificProduct = $scope.items[i];
        break;
      }
    }

    console.log($scope.specificProduct);
  }

  $scope.getSpecificProduct($scope.itemById);

  $scope.checkboxValue =  function() {
    var x = document.getElementById("myCheck").value;
    document.getElementById("demo").innerHTML = x;
  }

  $scope.hideAddOns = function(id) {
    console.log(id);
    if(id === 'Meta Descriptions' || id === 'Social Media Posts'){
      $scope.showAddOns = true;
    }
  }

  $scope.hideAddOns($scope.specificProduct.title);

$scope.cartShow = false;

//   $scope.showCart= function(){
//     console.log($scope.cartShow);
//     $scope.cartShow = true;
//   }
});
