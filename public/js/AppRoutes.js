(() => {
    'use strict';

    const app = angular.module('AthleteProfile');

    app.config(RouterConfig);

    RouterConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

    function RouterConfig($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider.state('/', {
            url: '/',
            templateUrl: './public/html/HomePage.html',
            controller: 'HomeController as controller'
        })

        $stateProvider.state('list', {
            url: '/list',
            templateUrl: './public/html/ListPlayers.html',
            controller: 'ListPlayerController as controller5',
            resolve: {
                data: ['dataService', (dataService) => {
                    return dataService.GetAllPlayers();
                }]
            }
        })

        $stateProvider.state('listOne', {
            url: '/list/{username}',
            templateUrl: './public/html/ListSinglePlayer.html',
            controller: 'ListPlayerProfileController as controller6',
            resolve: {
                data: ['dataService', '$stateParams', (dataService, $stateParams) => {
                    console.log("Request Sent");
                    return dataService.getPlayerData($stateParams.username);
                }]
            }
        })

        $stateProvider.state('basic', {
            url: '/new/basic',
            templateUrl: './public/html/BasicPlayer.html',
            controller: 'NewPlayerBasicController as controller1'
        })

        $stateProvider.state('about', {
            url: '/new/about',
            templateUrl: './public/html/AboutPlayer.html',
            controller: 'NewPlayerAboutController as controller2'
        })

        $stateProvider.state('media', {
            url: '/new/media',
            templateUrl: './public/html/MediaPlayer.html',
            controller: 'NewPlayerMediaController as controller3'
        })

        $stateProvider.state('preview', {
            url: '/new/preview',
            templateUrl: './public/html/PreviewPlayer.html',
            controller: 'NewPlayerPreviewController as controller4'
        })

    }
})();
