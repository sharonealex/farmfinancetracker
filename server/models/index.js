const Farmer = require("./Farmer");
const Timesheet = require("./TimeSheet");

Farmer.hasMany(Timesheet, {
  foreignKey: "farmer_id",
  onDelete: "CASCADE",
});

Timesheet.belongsTo(Farmer, {
  foreignKey: "farmer_id",
});

module.exports = { Farmer, Timesheet };
