(() => {
    'use strict';

    const app = angular.module('AthleteProfile');

    app.controller('NewPlayerPreviewController',NewPlayerPreviewController);

    NewPlayerPreviewController.$inject = ['PlayerService','dataService'];

    function NewPlayerPreviewController(PlayerService,dataService){
        let preview = this;
        preview.obj = PlayerService.getPlayerObject();
        let date = new Date(preview.obj.dob);
        preview.dob = (date.getMonth()+1).toString() + "/" + date.getDate().toString() + "/" + date.getFullYear().toString();

        preview.submit = () => {
            //dataService.UpdatePlayerData(preview.obj.username);
        }

    }
})();
