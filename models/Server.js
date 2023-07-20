'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Server extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      const server = sequelize.define('server');
      const name = sequelize.define('name');

      server.hasOne(name);
      server.hasMany(ticket);
    }
  }
  Server.init({
    name: DataTypes.STRING,
    employeeID: DataTypes.INTEGER,
    password: DataTypes.STRING,
    ticket: DataTypes.ARRAY(DataTypes.INTEGER)
  }, {
    sequelize,
    modelName: 'Server',
  });
  return Server;
};