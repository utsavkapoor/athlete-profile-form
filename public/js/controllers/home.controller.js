(() => {
    'use strict';

    const app = angular.module('AthleteProfile');

    app.controller('HomeController', HomeController);

    HomeController.$inject = ['PlayerService'];

    function HomeController(PlayerService) {
        PlayerService.reset();
    }
})()
