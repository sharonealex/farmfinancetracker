const { Farmer, Timesheet } = require("../models");

module.exports = {
    async saveStartHours({ body }, res) {
        console.log(body,"inisde save hours")
        const user = await Farmer.findOne({
            where: { email: body.email },
        });
        var farmerData = user.get({ plain: true });
        console.log("user from db", user);

        const timerecord = await Timesheet.create({
            start_hour: body.hour,
            finish_hour: null,
            hours: null,
            date_submission: new Date(),
            week_submission: new Date().getUTCDate,
            farmer_id: farmerData.id,
        });


    }
}
