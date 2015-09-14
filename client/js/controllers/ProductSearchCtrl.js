// public/js/controllers/ProductSearchCtrl.js
angular.module('ProductSearchCtrl', []).controller('ProductSearchController', function($scope, $routeParams, ProductService) {

	$scope.productName = $routeParams.name;
    // $scope.productCategory = $routeParams.category;
    $scope.userLocation = $routeParams.location;

    $scope.products = [];

    $scope.init = function(){
    	$scope.searchProduct();
    };

    $scope.searchProduct = function(){
    	console.log("ProductSearchCtrl.searchProduct - executed!")
    	ProductService.getProductsByName($scope.productName)
    	.success(function(data){
    		console.log("ProductSearchCtrl.getProductsByNameAndLocation - success!");
    		$scope.products = data;
    	})
    	.error(function(error){
    		console.log("ProductSearchCtrl.getProductsByNameAndLocation - error occured: " + error);
    	})
    };

});