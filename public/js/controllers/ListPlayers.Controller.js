(() => {
    'use strict';

    const app = angular.module('AthleteProfile');

    app.controller('ListPlayerController',ListPlayerController);

    function ListPlayerController(data){
        let list = this;
        console.log(data.data);

        list.players =  [
            {name:"abcd",sport:"Cricket",twitter:"random1"},
            {name:"efgh",sport:"Soccer",twitter:"random2"}
        ];
    }
})();
