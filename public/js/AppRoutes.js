(() => {
    'use strict';

    const app = angular.module('AthleteProfile');

    app.config(RouterConfig);

    RouterConfig.$inject = ['$stateProvider','$urlRouterProvider'];

    function RouterConfig($stateProvider,$urlRouterProvider){
        $urlRouterProvider.otherwise('/');

        $stateProvider.state('/',{
            url:'/',
            templateUrl:'./public/html/HomePage.html'
        })

        $stateProvider.state('list',{
            url:'/list',
            templateUrl:'./public/html/ListPlayers.html',
            controller:'ListPlayerController as controller5'
        })

        $stateProvider.state('basic', {
            url:'/new/basic',
            templateUrl:'./public/html/BasicPlayer.html',
            controller:'NewPlayerBasicController as controller1'
        })

        $stateProvider.state('about', {
            url:'/new/about',
            templateUrl:'./public/html/AboutPlayer.html',
            controller:'NewPlayerAboutController as controller2'
        })

        $stateProvider.state('media', {
            url:'/new/media',
            templateUrl:'./public/html/MediaPlayer.html',
            controller:'NewPlayerMediaController as controller3'
        })

        $stateProvider.state('preview', {
            url:'/new/preview',
            templateUrl:'./public/html/PreviewPlayer.html',
            controller:'NewPlayerPreviewController as controller4'
        })

    }
})();
