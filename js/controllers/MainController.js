/**
 * Controller for the view page. Obtains the input from the form 
 * and sends it to the result controller using the URL path.
 *  
 * @param  {String} $location Variable for the path
 */
app.controller("viewController", function ($scope, $location) {

    $scope.submitForm = function (date) {

        var time = date.substring(0,10);

        $location.path('/results/' + time);

    };
    
});

/**
 * Controller for the results page. Obtains the queries from the path 
 * and parses it using the Date object. Displays date if the query is valid
 * and displays error if it is invalid.
 *  
 * @param  {String} $routeParams Variable for the path parameters
 */
app.controller("resultController", function ($scope, $routeParams) {

    var date = new Date($routeParams.date);

    if (!isNaN(date)) {
        $scope.date = date;
    } else {
        $scope.error = "Input was an invalid date. Please enter a valid date."; //error if date is invalid
    }

});


