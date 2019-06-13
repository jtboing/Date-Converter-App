var app = angular.module("dateConverterApp", ['ngRoute']);

// Provide routing for the view.html and result.html files.
app.config( function ($routeProvider) {

    $routeProvider.when('/', {
        templateUrl: 'view.html',
        controller: 'viewController'
    }).when('/results/:date', {     //:date is the query obtained from the form.
        templateUrl: 'result.html',
        controller: 'resultController'
    }).otherwise({
        redirectTo: "/"
    });

});