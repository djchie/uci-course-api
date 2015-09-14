// public/js/controllers/HomeCtrl.js
angular.module('HomeCtrl', []).controller('HomeController', function($scope, $window) {

    $scope.productName = "";
    // $scope.productCategory = "";
    $scope.userLocation = "";

    // Load the search results page and then execute the search
    $scope.searchProduct = function(){
        // For name and category
    	// var url = '/product-search/category/';

    	// if ($scope.productCategory){
    	// 	url += $scope.productCategory + '/name/';
    	// }else{
    	// 	url += 'all-categories/name/';
    	// }

    	// if ($scope.productName){
    	// 	url += $scope.productName;
    	// }
    	// else{
    	// 	url += 'all-products';
    	// }

        var url = '/product-search/name/';

        if ($scope.productName){
            url += $scope.productName + '/location/';
        }
        else{
            url += 'all-products/location/';
        }

        if ($scope.userLocation){
            url += $scope.userLocation;
        }
        else{
            url += 'all-locations';
        }

    	$window.location.href = url;
    };

});