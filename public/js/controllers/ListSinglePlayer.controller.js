(() => {
    'use strict';

    const app = angular.module('AthleteProfile');

    app.controller('ListPlayerProfileController', ListPlayerProfileController);

    ListPlayerProfileController.$inject = ['data'];

    function ListPlayerProfileController(data) {
        let details = this;
        details.data = [];
        let object = data.data;
        Object.keys(object).forEach((obj) => {
            let temp_obj = {};
            temp_obj.key = obj;
            if (obj == "dob") {
                let date = new Date(object[obj]);
                temp_obj.value = (date.getMonth() + 1).toString() + "/" + date.getDate().toString() + "/" + date.getFullYear().toString();
            } else if (obj == "sports") {
                temp_obj.value = object[obj].join(",");
            } else {
                temp_obj.value = object[obj];
            }
            details.data.push(temp_obj);
        });
    }
})();
