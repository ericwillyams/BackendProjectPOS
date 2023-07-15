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
      // define association here
    }
  }
  Guest.init({
    seat: DataTypes.INTEGER,
    name: DataTypes.STRING,
    item: DataTypes.ARRAY,
    ticket: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
    }
  }, {
    sequelize,
    modelName: 'Guest',
  });
  return Guest;
};