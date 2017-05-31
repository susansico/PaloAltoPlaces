/* paloAlotPlaces httpService.js */

app = angular.module("PaloAltoPlacesApp");

app.service("HttpService", function($http) {

    var weatherDataUrl = "https://api.forecast.io/forecast/3fa70668d12de1c2a9439de0c6318a8f/37.46831,-122.1439?callback=JSON_CALLBACK";

    this.getPaloAltoWeather = function() {

        return $http.jsonp(weatherDataUrl)

            .then(function(weatherResponse) {

                return weatherResponse.data;
            })
    };

    this.getClassicMovie = function(titleUrl) {

        var classicMovieDataUrl = "http://www.omdbapi.com/?t=" + titleUrl + "&y=&plot=short&r=json&apikey=9118e89c";

        return $http.get(classicMovieDataUrl)

            .then(function(classicMovieResponse) {

                var classicMovieImdbID;
                var classicMoviePosterURL;

                self.classicMovieData = classicMovieResponse.data;
                classicMovieImdbID = classicMovieResponse.data.imdbID;
                classicMoviePosterURL = "http://img.omdbapi.com/?i=" + classicMovieImdbID + "&h=600&apikey=9118e89c";

                return $http({method: "GET", url: classicMoviePosterURL, responseType: "arraybuffer"});
            })

            .then(function (classicMovieResponse) {

                var posterImageByteArray;
                var posterImageByteString = "";

                posterImageByteArray = new Uint8Array(classicMovieResponse.data);

                for(var i = 0; i < posterImageByteArray.byteLength ; i++) {

                    posterImageByteString += String.fromCharCode(posterImageByteArray[i]);

                }

                self.classicMovieData.Poster = window.btoa(posterImageByteString);
                return self.classicMovieData;
            })
    };
});