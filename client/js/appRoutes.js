// "Angular routes"
// "Our Angular frontend will use the template file and inject it into the <div ng-view></div> in our index.html file."
// "It will do this without a page refresh which is exactly what we want for a single page application."

// public/js/appRoutes.js
    angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider

        // home page
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'MainController'
        })

        // for searching when there is a category and a name
        .when('/product-search/category/:category/name/:name', {
            templateUrl: 'views/product-search.html',
            controller: 'ProductSearchController'
        })

        // for searching when there is a name and a location
        .when('/product-search/name/:name/location/:location', {
            templateUrl: 'views/product-search.html',
            controller: 'ProductSearchController'
        })

        .otherwise({
            redirectTo: '/'
        });

    $locationProvider.html5Mode(true);

}]);