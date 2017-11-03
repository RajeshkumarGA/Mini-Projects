app.config(function($routeProvider) {
    $routeProvider
    .when("/london", {
        templateUrl : "view/london.html"
    })
    .when("/paris", {
        templateUrl : "view/paris.html"
    })
    .otherwise({
        templateUrl : "<h1>Nothing</h1><p>Nothing has been selected</p>"
    });
});