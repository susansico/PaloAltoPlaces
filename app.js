/* paloAltoPlaces app.js */

var app = angular.module("PaloAltoPlacesApp", ["ngRoute"]);

app.config(function($routeProvider) {

    $routeProvider

        .when("/", {
            templateUrl: "./templates/home.html",
            controller: "HomeController"
        })
        .when("/stanfordTheater", {
            templateUrl: "./templates/stanfordTheater.html",
            controller: "StanfordTheaterController"
        });
});

app.controller("MainController", ["$scope", "HttpService", function($scope, HttpService) {

    $scope.weatherData = {

        temperature: "",
        summary: "",
        wind: "",
        humidity: "",
        dewPoint: "",
        visibility: ""
    };
    $scope.celsiusTemperature = "";
    var temperature;

    $scope.date = new Date();
    console.log($scope.date);

    $scope.getWeatherData = function() {

        HttpService.getPaloAltoWeather()

            .then(function (weatherData) {

                console.log(weatherData);
                temperature = weatherData.currently.temperature.toFixed();
                $scope.weatherData.temperature = temperature.toString() + "°F";
                $scope.celsiusTemperature = ((temperature - 32) * 5 / 9).toFixed().toString() + "°C";
                $scope.weatherData.summary = weatherData.currently.summary;
                $scope.weatherData.wind = weatherData.currently.windSpeed.toFixed().toString() + " mph";
                $scope.weatherData.humidity = (weatherData.currently.humidity * 100).toString() + "%";
                $scope.weatherData.dewPoint = weatherData.currently.dewPoint.toFixed().toString() + "°";
                $scope.weatherData.visibility = weatherData.currently.visibility.toFixed(1).toString() + " mi";
            })
    };

    $scope.getWeatherData();
}]);