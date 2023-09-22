const { Sequelize } = require("sequelize");
const sequelize = new Sequelize(
	"postgres://kiciufyg:J5graQTob1-oavWPIZfxofhHP7Aejwvj@stampy.db.elephantsql.com:5432/kiciufyg"
);

module.exports = sequelize;
