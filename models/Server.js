'use strict';
const {
  Model
} = require('sequelize');
const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
  class Server extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Server.init({
    name: DataTypes.STRING,
    password: DataTypes.STRING,
    ticket: DataTypes.ARRAY(DataTypes.INTEGER),
    createdAt: new Date(),
    updatedAt: new Date()
  }, {
    sequelize,
    modelName: 'Server',
  });

  Server.beforeSave(async (Server) => {
    if (Server.changed('password')) {
      const hashedPassword = await bcrypt.hash(Server.password, 10);
      Server.password = hashedPassword;
    }
  });
  

  return Server;
};