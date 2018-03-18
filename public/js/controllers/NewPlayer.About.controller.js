(() => {
    const app = angular.module('AthleteProfile');

    app.controller('NewPlayerAboutController', NewPlayerAboutController);

    NewPlayerAboutController.$inject = ['PlayerService', 'dataService'];

    function NewPlayerAboutController(PlayerService, dataService) {
        let player_about = this;
        player_about.option = ["Yes", "No"];
        let check = PlayerService.getUserProperties();
        console.log(PlayerService.getUserProperties());
        if(check.username.length === 0){
            player_about.hide = true;
        } else {
            player_about.hide = false;
        }

        let obj = PlayerService.getPlayerObject();

        player_about.association = obj.association;
        player_about.team = obj.team;
        player_about.about = obj.about;
        player_about.interest = obj.interest;
        player_about.charities = obj.charities;
        player_about.pets = obj.pets;
        player_about.alchol = obj.alchol;
        player_about.married = obj.married;

        player_about.submit = () => {
            let object = {
                association: player_about.association,
                team: player_about.team,
                about: player_about.about,
                interest: player_about.interest,
                charities: player_about.charities,
                pets: player_about.pets,
                alchol: player_about.alchol,
                married: player_about.married
            };

            PlayerService.setAboutData(object);
        }
    }
})();
