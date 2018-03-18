(() => {
    'use strict';

    const app = angular.module('AthleteProfile');

    app.controller('ListPlayerController',ListPlayerController);

    function ListPlayerController(){
        let list = this;

        list.players =  [
            {name:"abcd",sport:"Cricket",twitter:"random1"},
            {name:"efgh",sport:"Soccer",twitter:"random2"}
        ];
    }
})();
