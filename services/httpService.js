/* paloAlotPlaces httpService.js */

app = angular.module("PaloAltoPlacesApp");

app.service("HttpService", function($http) {

    var weatherDataUrl = "https://api.forecast.io/forecast/3fa70668d12de1c2a9439de0c6318a8f/37.46831,-122.1439?callback=JSON_CALLBACK";

    this.getPaloAltoWeather = function() {

        return $http.jsonp(weatherDataUrl)

            .then(function(weatherResponse) {

                console.log(weatherResponse);
                return weatherResponse.data;
            })
    };

    this.getClassicMovie = function(titleUrl) {

        //http://www.omdbapi.com/?t=Gone+with+the+Wind&y=&plot=short&r=json
        var classicMovieDataUrl = "http://www.omdbapi.com/?t=" + titleUrl + "&y=&plot=short&r=json";
        console.log(classicMovieDataUrl);

        return $http.get(classicMovieDataUrl)

            .then(function(classicMovieResponse) {

                console.log(classicMovieResponse.data);
                return classicMovieResponse.data;
            })
    };


});