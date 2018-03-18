(() => {
    'use strict';

    const app = angular.module('data');

    app.service('dataService', dataService);

    dataService.$inject = ['$q', '$http'];

    /**
     * Service used for makin REST Calls to the server
     * @param  {[type]} $q    [description]
     * @param  {[type]} $http [description]
     * @return {[type]}       [description]
     */

    function dataService($q, $http) {
        let data = this;

        /**
         * Post call to the server to make the record
         * @param {[type]} object [description]
         */
        data.CreateNewPlayer = (object) => {
            let req = {
                method: 'POST',
                url: '/new',
                data: object
            };
            console.log(req);

            return $http(req).then((response) => {
                return response;
            }).catch((err) => {
                return err;
            });
        }
        /**
         * Put call to server to update the record of a player
         * @param {[type]} username [description]
         * @param {[type]} object   [description]
         */
        data.UpdatePlayerData = (username, object) => {
            return $http.put('/new/' + username, object).then((response) => {
                return response;
            }).catch((err) => {
                return err;
            })
        }
        /**
         * Get all the records of a player
         */
        data.GetAllPlayers = () => {
            return $http.get('/list').then((response) => {
                return response;
            }).catch((err) => {
                return err;
            });
        }
        /**
         * Getting profile of a single Player
         * @param  {[type]} username [description]
         * @return {[type]}          [description]
         */
        data.getPlayerData = (username) => {
            return $http.get('/list/' + username).then((response) => {
                return response;
            }).catch((err) => {
                return err;
            });
        }
    }
})();
