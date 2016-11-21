angular.module('personal').controller('shopCtrl', function($scope){
  $scope.items = [
    {
      id: 1,
      image: '/images/PremiumSEO.jpg',
      title: 'Premium SEO Articles',
      price: '$9.50'
    },
    {
      id: 2,
      image: '/images/BlogPosts.jpg',
      title: 'Branded Blog Posts',
      price: '$15.00'
    },
    {
      id: 3,
      image: '/images/SpecialtyBlogPost.jpg',
      title: 'Specialty Blog Post',
      price: '$27.50'
    },
    {
      id: 4,
      image: '/images/ProductDescriptions.jpg',
      title: 'Product Descriptions',
      price: '$3.50'
    },
    {
      id: 5,
      image: '/images/PageRewrites-1.jpg',
      title: 'Page Rewrites',
      price: '$13.25'
    },
    {
      id: 6,
      image: '/images/WebPages.jpg',
      title: 'Branded Blog Posts',
      price: '$25.00'
    },
    {
      id: 7,
      image: '/images/MetaDescriptions-1.jpg',
      title: 'Meta Descriptions',
      price: '$2.25'
    },
    {
      id: 8,
      image: '/images/SocialMediaPosts.jpg',
      title: 'Social Media Posts',
      price: '$2.50'
    },
    {
      id: 9,
      image: '/images/PressReleases.jpg',
      title: 'Press Releases',
      price: '$42.00'
    },
    {
      id: 10,
      image: '/images/SpecialtyWebPages.jpg',
      title: 'Specialty Web Pages',
      price: '$33.00'
    }
  ];

$scope.slideDown = function(div) {

    $('html,body').animate({
        scrollTop: $(div).offset().top},
        'slow');

}

  $scope.poo = "Hello there Brandon!";
});
