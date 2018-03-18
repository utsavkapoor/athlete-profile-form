(() => {
    'use strict';

    const app = angular.module('AthleteProfile');

    app.controller('ListPlayerController', ListPlayerController);

    function ListPlayerController(data) {
        let list = this;
        console.log(data.data);
        let obj = data.data;
        list.players = [];
        Object.keys(obj).forEach((key) => {
            let temp_obj = {};
            temp_obj.name = obj[key].name;
            temp_obj.sport = obj[key].sports;
            temp_obj.twitter = obj[key].twitter;
            temp_obj.username = key;
            list.players.push(temp_obj);
        });

    }
})();
