var express = require("express");
var router = express.Router();
const { User } = require("../models");
const userController = require("../controllers/guests");
const findUser = require("../middleware/findGuest");
// const bcrypt = require('bcrypt');
// const authCheck = require('../middleware/authCheck');
// const saltRounds = 10;

/* GET users listing. */
router.get("/", function (req, res, next) {
	res.send("respond with a resource");
});

//GET CREATE USER
router.get("/create", userController.createUser);

//POST CREATE user
router.post("/create", userController.postCreateuser);

/////////////////////
/////////////////////
//GET LOGIN
router.get("/login", userController.getLogin);
//POST LOGIN
// router.post('/login', userController.postLogin);
/////////////////////
/////////////////////

//GET SEATMAP
router.get("/seatmap", userController.getSeatmap);

// GET SEAT by ID
router.get("/seat/:id", findUser, userController.getSeatByID);

module.exports = router;
