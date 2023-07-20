const { Server } = require('../models')

const findUser = async (req, res, next) => {
	console.log("Find single user by Pk in database");
    const id = req.params.id;
	req.server = await User.findByPk(id);
	console.log(req.server);
	next();
};

module.exports = findUser;
