/* PaloAltoPlaceApp stanfordTheaterController.js */

var app = angular.module("PaloAltoPlacesApp");

app.controller("StanfordTheaterController", ["$scope", "HttpService", function($scope, HttpService) {

    $scope.classicMovieData = {
        title: "",
        year: "",
        poster: "",
        plot: "",
        director: "",
        writer: "",
        actors: "",
        runtime: "",
        genre: "",
        imdbRating: "",
        rated: ""
    };

    $scope.classicMovieInput = "";

    $scope.getClassicMovieData = function() {

        var classicMovieTitle = $scope.classicMovieInput;
        var titleArray = classicMovieTitle.split(" ");
        var titleUrl = titleArray.join("+");

        $scope.classicMovieData.poster = "";

        HttpService.getClassicMovie(titleUrl)


            .then(function (classicMovieData) {

                var classicMovieCreditList = document.getElementById("ClassicMovieCreditList");
                classicMovieCreditList.style.display = "block";
                $scope.classicMovieData.title = classicMovieData.Title;
                $scope.classicMovieData.year = classicMovieData.Year;
                $scope.classicMovieData.poster = classicMovieData.Poster;
                $scope.classicMovieData.plot = classicMovieData.Plot;
                $scope.classicMovieData.director = classicMovieData.Director;
                $scope.classicMovieData.writer = classicMovieData.Writer;
                $scope.classicMovieData.actors = classicMovieData.Actors;
                $scope.classicMovieData.runtime = classicMovieData.Runtime;
                $scope.classicMovieData.genre = classicMovieData.Genre;
                $scope.classicMovieData.imdbRating = classicMovieData.imdbRating;
                $scope.classicMovieData.rated = classicMovieData.Rated;
            })
    };
}]);