const { Server } = require("../models");

const findServer = async (req, res, next) => {
	console.log("Find single SERVER by Pk in database");
	const id = req.params.id;
	req.server = await Server.findByPk(id);
	console.log(req.server);
	next();
};

module.exports = findServer;
