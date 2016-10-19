(function() {
    'use strict';

    angular
        .module('app')
        .controller('MainController', MainController);

    MainController.$inject = ['$http', 'movieService'];

    /* @ngInject */
    function MainController($http, movieService) {
        var vm = this;
        vm.title = 'MainController';
        vm.movies = [];


        activate();

        ////////////////

        function activate() {
        }

        //This is the search bar go button function
        vm.search = function(search) {
            movieService.getMovie(search).then(function(result){
                vm.movies.push({"movie" : result.data.Search});
            })
        }
    }
})();