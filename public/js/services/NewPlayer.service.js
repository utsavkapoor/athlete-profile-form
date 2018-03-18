(() => {
    'use strict';

    const app = angular.module('AthleteProfile');

    app.service('PlayerService', PlayerService);
    /**
     * A service to share form data between different controllers for easy access in the form
     * @constructor
     */
    function PlayerService() {
        let playerdata = this;
        let player_settings_object = {
            username: '',
            alreadyExists: false
        };
        let player_object = {};

        /**
         * Set data for Form of Basic Details
         * @param {[type]} object [description]
         */

        playerdata.setBasicData = (object) => {
            player_object.username = object.username;
            player_object.name = object.name;
            player_object.sports = object.sports;
            player_object.nationality = object.nationality;
            player_object.gender = object.gender;
            player_object.dob = object.dob;
        };

        /**
         * Set data for About part of the form
         * @param {[type]} object [description]
         */
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

        /**
         * Set social media handles
         * @param {[type]} object [description]
         */
        playerdata.setMediaData = (object) => {
            player_object.facebook = object.facebook;
            player_object.twitter = object.twitter;
            player_object.instagram = object.instagram;
            player_object.snapchat = object.snapchat;
            player_object.linkedin = object.linkedin;
            player_object.twitch = object.twitch;
        }

        /**
         * Get All Player Data entered
         * @return {[type]} [description]
         */
        playerdata.getPlayerObject = () => {
            return player_object;
        }

        /**
         * Reset the object as new data will be entered
         */
        playerdata.reset = () => {
            player_object = {};
            player_settings_object = {
                username: '',
                alreadyExists: false
            };
        }
        /**
         * Set Properties of data
         * @param {[type]} object [description]
         */
        playerdata.setUserProperties = (object) => {
            player_settings_object.username = object.username;
            player_settings_object.alreadyExists = object.value;
        }
        /**
         * Get User Properties
         * @param  {[type]} object [description]
         * @return {[type]}        [description]
         */

        playerdata.getUserProperties = (object) => {
            return player_settings_object;
        }

    }
})();
