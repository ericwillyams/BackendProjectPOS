const { Entree } = require("../models");


const findEntree = async (req, res, next) => {
	try {
	  console.log("Find single entree by Pk in database");
	  const id = req.params.id;
	  console.log("ID from URL:", id);
	  req.entree = await Entree.findByPk(id);
	  console.log("Entree found:", req.entree);
	  next();
	} catch (error) {
	  console.error("Error fetching entree from database:", error);
	  // Handle the error, send an appropriate response, or call next(error) to pass it to the error handling middleware.
	  next(error);
	}
  };

module.exports = findEntree;