var express = require("express");
var router = express.Router();
const { Server } = require("../models");
const { Guest } = require("../models");
const { Entree } = require("../models");
const bodyParser = require("body-parser");
const app = express();

const userController = require("../controllers/servers");
const findGuest = require("../middleware/findGuest");
const findEntree = require("../middleware/findEntree");
const findServer = require("../middleware/findServer");

const bcrypt = require("bcrypt");
const authCheck = require("../middleware/authCheck");
const saltRounds = 10;

/* GET users listing. */
router.get("/", userController.getAllUsers);
``
//GET CREATE USER
router.get("/create", userController.createUser);

//POST CREATE user
router.post("/create", userController.postCreateuser);

//GET LOGIN
router.get("/login", userController.getLogin);

//POST LOGIN
router.post("/login", userController.postLogin);

//GET SEATMAP
router.get("/seatmap", userController.getSeatmap);

// GET SERVER by ID
router.get("/server/:id", findServer, userController.getServerByID);

//GET GUEST BY ID
router.get("/guest/:id", findGuest, userController.getGuestByID);

//post guest by ID
router.post("/guest/:id", findGuest, userController.postGuestByID);

//GET
router.get("/entree/:id", findEntree, userController.getEntreeByID);

//dont fully need
router.post   ("/entree/:id", userController.postEntreeByID);

router.get("/checkout", userController.getCheckout);

router.get("/beverage", userController.getBeverage);

router.get("/edit/:id", userController.editGuestByID);
router.post("/edit/:id", userController.postEditGuestByID);

router.get("/delete/:id", async (req, res) => {
	const id = req.params.id;
	const { ticket,seat, server, items } = req.body;
	await Guest.destroy({ where: { items: items } });
	res.send("Guest had been deleted");
});

module.exports = router;
