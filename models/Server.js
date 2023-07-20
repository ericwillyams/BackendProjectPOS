"use strict";
const { Model } = require("sequelize");
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
	Server.init(
		{
			name: DataTypes.STRING,
			employeeid: DataTypes.INTEGER,
			password: DataTypes.STRING,
			ticket: DataTypes.INTEGER,
		},
		{
			sequelize,
			modelName: "Server",
		}
	);
	Server.beforeSave(async (server) => {
		if (server.changed('password')) {
		  const hashedPassword = await bcrypt.hash(server.password, 10);
		  server.password = hashedPassword;
		}
	  });

	return Server;
};
