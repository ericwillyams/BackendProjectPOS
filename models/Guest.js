// TO ADD
//Hash passwords section
//Add 'bcyrpt'
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Guest extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define  association here
      const guest = sequelize.define('guest');
      const ticket = sequelize.define('ticket');
  
      guest.hasOne(ticket)
      ticket.belongsTo(guest);

    }
  }
  Guest.init({
    ticket: DataTypes.INTEGER,
    seat: DataTypes.INTEGER,
    name: DataTypes.STRING,
    item: DataTypes.ARRAY(DataTypes.INTEGER),
    server: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Guest',
  });
  return Guest;
};