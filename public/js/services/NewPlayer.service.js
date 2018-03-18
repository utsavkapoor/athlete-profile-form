(() => {
    'use strict';

    const app = angular.module('AthleteProfile');

    app.service('PlayerService',PlayerService);

    function PlayerService(){
        let playerdata = this;
        let player_settings_object = {
            username:'',
            alreadyExists:false
        };
        let player_object = {};

        playerdata.setBasicData = (object) => {
            player_object.username = object.username;
            player_object.name = object.name;
            player_object.sports = object.sports;
            player_object.nationality = object.nationality;
            player_object.gender = object.gender;
            player_object.dob = object.dob;
        };

        playerdata.setAboutData = (object) => {
            player_object.association = object.association;
            player_object.team = object.team;
            player_object.about = object.about;
            player_object.interest = object.interest;
            player_object.charities = object.charities;
            player_object.pets = object.pets;
            player_object.alchol = object.alchol;
            player_object.married = object.married;
        }

        playerdata.setMediaData = (object) => {
            player_object.facebook = object.facebook;
            player_object.twitter = object.twitter;
            player_object.instagram = object.instagram;
            player_object.snapchat = object.snapchat;
            player_object.linkedin = object.linkedin;
            player_object.twitch = object.twitch;
        }

        playerdata.getPlayerObject = () => {
            return player_object;
        }

        playerdata.reset = () => {
            player_object = {};
            player_settings_object = {username:'',
            alreadyExists:false};
        }

        playerdata.setUserProperties = (object) => {
            player_settings_object.username = object.username;
            player_settings_object.alreadyExists = object.value;
        }

        playerdata.getUserProperties = (object) => {
            return player_settings_object;
        }

    }
})();
