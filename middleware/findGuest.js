const { Server } = require('../models')

const findGuest = async (req, res, next) => {
	console.log("Find single GUEST by Pk in database");
    const id = req.params.id;
	req.server = await Server.findByPk(id);
	console.log(req.server);
	next();
};

module.exports = findGuest;
