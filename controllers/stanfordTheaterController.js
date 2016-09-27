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
        actors: ""
    };

    $scope.classicMovieInput = "";

    $scope.getClassicMovieData = function() {

        var classicMovieTitle = $scope.classicMovieInput;
        var titleArray = classicMovieTitle.split(" ");
        var titleUrl = titleArray.join("+");
        console.log(titleUrl);

        HttpService.getClassicMovie(titleUrl)


            .then(function (classicMovieData) {

                console.log(classicMovieData);

                var classicMovieCreditList = document.geElementById("ClassicMovieCreditList");
                classicMovieCreditList.style.display = "block";
                $scope.classicMovieData.title = classicMovieData.Title;
                console.log(classicMovieData.Title);
                console.log($scope.classicMovieData.title);
                $scope.classicMovieData.year = classicMovieData.Year;
                $scope.classicMovieData.poster = classicMovieData.Poster;
                console.log($scope.classicMovieData.poster);
                $scope.classicMovieData.plot = classicMovieData.Plot;
                $scope.classicMovieData.director = classicMovieData.Director;
                $scope.classicMovieData.writer = classicMovieData.Writer;
                $scope.classicMovieData.actors = classicMovieData.Actors;


            })
    };
}]);