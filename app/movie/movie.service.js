(function() {
    'use strict';

    angular
        .module('app')
        .service('movieService', movieService);

    movieService.$inject = ['$http', '$q'];

    /* @ngInject */
    function movieService($http, $q) {

        ////////////////

        var URL = 'http://www.omdbapi.com/?'
        var defer = $q.defer();

        this.getMovie = function(movie) {

            return $http({
                method: 'GET',
                url: URL,
                params:{
                    t: movie,
                    s: movie,
                    type: "movie"

                }
            }).then(function(response){

                //Checks if it returns an object
                if (typeof response === 'object') {
                    defer.resolve(response);
                    //If the object doesn't have anything in it log an error
                    if (typeof response.data.Response === "False")
                    {
                        console.log("NO MOVIES");
                    }else {
                    return response;
                    }
                } else
                {
                    //Fire error if no object is returned
                    defer.reject('no data found');
                    console.log("ERROROROR");
                }
            },
            function(error){
                defer.reject(error);
            });
        };

        this.getDetails = function(movieDetail) {

            return $http({
                method: 'GET',
                url: URL,
                params:{
                    i: movieDetail,
                    plot: "full"
                }
            }).then(function(response){

                //Checks if it returns an object
                if (typeof response === 'object') {
                    defer.resolve(response);
                    //If the object doesn't have anything in it log an error
                    if (typeof response.data.Response === "False")
                    {
                        console.log("NO MOVIES");
                    }else {
                    return response;
                    }
                } else
                {
                    //Fire error if no object is returned
                    defer.reject('no data found');
                    console.log("ERROR");
                }
            },
            function(error){
                defer.reject(error);
            });
        };
    }
})();

// CW, EP, BS, VZ
