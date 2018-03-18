(() => {
    'use strict';

    const app = angular.module('data');

    app.service('dataService',dataService);

    dataService.$inject = ['$q','$http'];

    function dataService($q,$http){
        let data = this;

        data.CreateNewPlayer = (object) => {
            let req = {
                method:'POST',
                url:'/new',
                data: object
            };
            console.log(req);

            return $http(req).then((response) => {
                return response;
            }).catch((err) => {
                return err;
            });
        }

        data.UpdatePlayerData = (username,object) => {
            return $http.put('/new/'+username,object).then((response) => {
                return response;
            }).catch((err) => {
                return err;
            })
        }

        data.GetAllPlayers = () => {
            return $http.get('/list').then((response) => {
                return response;
            }).catch((err) => {
                return err;
            });
        }

        data.getPlayerData = (username) => {
            return $http.get('/list/'+username).then((response) => {
                return response;
            }).catch((err) =>{
                return err;
            });
        }
    }
})();
