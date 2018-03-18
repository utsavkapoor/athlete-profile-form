(() => {
    'use strict';

    const app = angular.module('AthleteProfile');

    app.controller('NewPlayerPreviewController', NewPlayerPreviewController);

    NewPlayerPreviewController.$inject = ['PlayerService', 'dataService'];

    function NewPlayerPreviewController(PlayerService, dataService) {
        let preview = this;
        let check = PlayerService.getUserProperties();
        if(check.username.length === 0){
            preview.hide = true;
        } else {
            preview.hide = false;
        }
        preview.obj = PlayerService.getPlayerObject();
        let date = new Date(preview.obj.dob);
        preview.dob = (date.getMonth() + 1).toString() + "/" + date.getDate().toString() + "/" + date.getFullYear().toString();

        preview.submit = () => {
            dataService.UpdatePlayerData(preview.obj.username, preview.obj);
        }

    }
})();
