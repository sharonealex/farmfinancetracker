const sequelize = require('../config/connection');
const {Farmer, Timesheet} = require("../models/");


const farmerSeedData = require("./farmerData.json");

const seedDatabase = async ()=> {
    console.log("seeding farmer data")
    
    await sequelize.sync({force: true});

    await Farmer.bulkCreate(farmerSeedData);
    process.exit(0);
}

seedDatabase();