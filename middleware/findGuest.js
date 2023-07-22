const { Guest } = require("../models");

const findGuest = async (req, res, next) => {
	console.log("Find single GUEST by Pk in database");
	const id = req.params.id;
	req.guest = await Guest.findByPk(id);
	console.log(req.guest);
	next();
};

module.exports = findGuest;
