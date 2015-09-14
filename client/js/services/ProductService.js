// "This is where you would use $http or $resource to do your API calls to the Node backend from your Angular frontend."

// public/js/services/ProductService.js
angular.module('ProductSrvce', []).factory('ProductService', ['$http', function($http) {

    return {
        // call to get all products
        getProducts : function() {
            console.log("ProductSrvce.getProducts - got here!");
            return $http.get('/api/products')
        },

        getProductsByName : function(name) {
            console.log("ProductSrvce.getProductsByName");
            return $http.get('/api/products/' + name);
        },

        getProductsByNameAndLocation : function(name, location) {
            console.log("ProductSrvce.getProductsByNameAndLocation");
            return $http.get('/api/products/' + name + '/' + location);
        },

        getProductsByNameAndCategory : function() {
            console.log("ProductSrvce.getProductsByNameAndCategory");
            return $http.get('/api/products');
        },

                // these will work when more API routes are defined on the Node side of things
        // call to POST and create a new product
        create : function(productData) {
            return $http.post('/api/products', productData);
        },

        // call to DELETE a product
        delete : function(id) {
            return $http.delete('/api/products/' + id);
        }
    }       

}]);