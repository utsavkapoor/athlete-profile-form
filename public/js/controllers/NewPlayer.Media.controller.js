(() => {
    const app = angular.module('AthleteProfile');

    app.controller('NewPlayerMediaController', NewPlayerMediaController);

    NewPlayerMediaController.$inject = ['PlayerService'];

    function NewPlayerMediaController(PlayerService) {
        let media = this;
        let obj = PlayerService.getPlayerObject();
        let check = PlayerService.getUserProperties();
        console.log(PlayerService.getUserProperties());
        if(check.username.length === 0){
            media.hide = true;
        } else {
            media.hide = false;
        }

        media.facebook = obj.facebook;
        media.twitter = obj.twitter;
        media.instagram = obj.instagram;
        media.snapchat = obj.snapchat;
        media.linkedin = obj.linkedin;
        media.twitch = obj.twitch;
        media.submit = () => {
            let object = {
                facebook: media.facebook,
                twitter: media.twitter,
                instagram: media.instagram,
                snapchat: media.snapchat,
                linkedin: media.linkedin,
                twitch: media.twitch
            }
            PlayerService.setMediaData(object);
        }
    }
})();
