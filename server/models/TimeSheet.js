const {Model, DataTypes} = require("sequelize");
const sequelize = require("../config/connection");

class Timesheet extends Model{};

Timesheet.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        startHour: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: 0
        },
        finishHour: {
            type: DataTypes.DATE,
            defaultValue: 0
        },
        hours: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
        },
        dateSubmission: {
            type: DataTypes.DATE,
            defaultValue: new Date("Jan 25 2015")
        },
        farmer_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'farmer',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'timesheet',
    }
   
);
module.exports = Timesheet;