const {Model, DataTypes} = require("sequelize");
const sequelize = require("../config/connection");
const bcrypt = require('bcrypt');

class Farmer extends Model {};

Farmer.init(
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'farmer',
    },{
        instanceMethods: {
            checkPassword: (password) => {
                return bcrypt.compareSync(password, this.password);
            }
    }
    }
);

Farmer.beforeCreate(async (user, options) => {
    if(user.isNewRecord || user.changed){
        const saltRounds = 10;
        user.password = await bcrypt.hash(user.password, saltRounds);
    }
  });

  Farmer.beforeBulkCreate(async (users, options) => {
    for (const user of users) { if(user.isNewRecord || user.changed){
        const saltRounds = 10;
        user.password = await bcrypt.hash(user.password, saltRounds);
    }}
   
  });

// Farmer.prototype.isCorrectPassword = async function(password){
//     console.log('verifying password...');
//     return bcrypt.compare(password, user.password);

// }

module.exports = Farmer;


