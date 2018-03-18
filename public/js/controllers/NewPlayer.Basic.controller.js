(() => {
    'use strict';

    const app = angular.module('AthleteProfile');

    app.controller('NewPlayerBasicController', NewPlayerBasicController);

    NewPlayerBasicController.$inject = ['PlayerService', 'dataService'];

    function NewPlayerBasicController(PlayerService, dataService) {
        let player = this;

        player.options = ["Golf", "Tennis", "Cricket", "Basketball", "Baseball", "American Football", "Aquatics", "Archery", "Automobile Racing", "Badminton", "Beach Volleyball", "Bobsleigh", "Body Building", "Boxing", "Cross Country Running", "Cross Country Skiing", "Curling", "Cycling", "Darts", "Decathlon", "Down Hill Skiing", "Equestrianism", "eSports", "Fencing", "Field Hockey", "Figure Skating", "Gymnastics", "Ice Hockey", "Martial Arts", "Mixed Martial Arts", "Modern Pentathlon", "Motorcycle Racing", "Netball", "Polo", "Racquetball", "Rowing", "Rugby", "Sailing", "Softball", "Shooting", "Skateboarding", "Skeet Shooting", "Skeleton", "Snow Boarding", "Soccer (Football)", "Squash", "Surfing", "Swimming", "Track and Field"];

        player.gender_option = ["Male", "Female"];

        let obj = PlayerService.getPlayerObject();
        player.name = obj.name;
        player.username = obj.username;
        player.sports = obj.sports;
        player.nationality = obj.nationality;
        player.gender = obj.gender;
        player.dob = obj.dob;

        player.submit = () => {
            let object = {
                name: player.name,
                username: player.username,
                sports: player.sports,
                nationality: player.nationality,
                gender: player.gender,
                dob: player.dob
            };

            PlayerService.setBasicData(object);
            PlayerService.setUserProperties({
                username: player.username,
                value: false
            });

            dataService.CreateNewPlayer(object).then((response) => {
                PlayerService.setUserProperties(response);
            })
        }
    }
})();
