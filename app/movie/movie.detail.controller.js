(function() {
    'use strict';

    angular
        .module('app')
        .controller('DetailController', DetailController);

    DetailController.$inject = ['$http', '$stateParams', 'movieService'];

    /* @ngInject */
    function DetailController($http, $stateParams, movieService) {
        var vm = this;
        vm.title = 'DetailController';
        vm.movieDetails = [];

        activate();

        ////////////////

        function activate() {
            //Fires function as soon as the page loads
			movieService.getDetails($stateParams.movieDetailId).then(function(result){
                vm.movieDetails.push({"details" : result.data});
            })
        }
        vm.search = function(search) {
            movieService.getMovie(search).then(function(result){
                vm.movies.push({"movie" : result.data.Search});
            })
        }
    }
})();

// CW, EP, BS, VZ
