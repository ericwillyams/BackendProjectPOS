var express = require("express");
var router = express.Router();
const { Server } = require("../models");
const { Guest } = require("../models");
const userController = require("../controllers/servers");
const findGuest = require("../middleware/findGuest");
const findServer = require("../middleware/findServer");

const bcrypt = require('bcrypt');
// const authCheck = require('../middleware/authCheck');
const saltRounds = 10;

/* GET users listing. */
router.get('/', userController.getAllUsers);

//GET CREATE USER
router.get("/create", userController.createUser);

//POST CREATE user
router.post("/create", userController.postCreateuser);

//GET LOGIN
router.get("/login", userController.getLogin);

//POST LOGIN
router.post('/login', userController.postLogin);

//GET SEATMAP
router.get("/seatmap", userController.getSeatmap);

// GET SERVER by ID
router.get("/server/:id", findServer, userController.getServerByID);


//GET GUEST BY ID
router.get("/guest/:id", findGuest, userController.getGuestByID);

module.exports = router;
