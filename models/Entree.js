'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Entree extends Model {}
Entree.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    entreeitem: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    // Additional fields and configurations if any
  },
  {
    sequelize,
    modelName: 'Entree',
    tableName: 'Entrees',
    // Other model options if any
  }
);return Entree;
};