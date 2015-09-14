// "Let’s set up our Angular app to use all of our components."
// "We will use dependency injection and set up our Angular application."

// To my understanding, this collects all of the componenets of the Angular stuff we built,
// And makes it usable in html. For example, we can now make a call to the name 'sampleApp'.

// public/js/app.js
angular.module('angularApp', ['ngRoute', 'appRoutes', 'MainCtrl', 'HomeCtrl', 'ProductSearchCtrl', 'ProductSrvce']);