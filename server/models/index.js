const Farmer = require("./Farmer");
const Timesheet = require("./Timesheet");

Farmer.hasMany(Timesheet, {
  foreignKey: "farmer_id",
  onDelete: "CASCADE",
});

Timesheet.belongsTo(Farmer, {
  foreignKey: "farmer_id",
});

module.exports = { Farmer, Timesheet };
