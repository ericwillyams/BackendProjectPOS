const { Server } = require("../models");
const { Guest } = require("../models");
const { Entree } = require("../models");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { token } = require("morgan");

//Guest from User***
const getAllUsers = async (req, res, next) => {
	// const entrees = await Entree.findAll();
	// res.render("entree", { title: "all entree", entrees });
	
};

//GET CREATE USER
const createUser = async (req, res) => {
	res.render("create", { title: "create employee" });
};

//POST CREATE USER
const postCreateuser = async (req, res) => {
	console.log(req.body);
	const { name, employeeid, password, ticket } = req.body;
	console.log(name, employeeid, password, ticket);

	const newServer = await Server.create({
		name,
		employeeid,
		password,
		ticket,
	});
	console.log("New server's ID:", newServer.name);

	res.redirect("/servers/login");
};

//GET LOGIN
const getLogin = async (req, res) => {
	res.render("login", { title: "login to POS" });
};

//POST LOGIN
const postLogin = async (req, res) => {
	const { name, password } = req.body;

	const data = await Server.findOne({
		where: { name },
	});

	// console.log(name,password,data)
	// console.log("pw", password, data.password)

	if (data == null) {
		res.render("login", { title: "Login", error: "User not found" });
	} else {
		const hashedPW = data.password;
		const isPasswordValid = await bcrypt.compare(password, data.password);
		if (isPasswordValid == true) {
			const token = jwt.sign({ foo: "bar" }, "superSecretPrivateKey", {
				expiresIn: "1h",
			});
			console.log(token);

			// res.cookie("token", token);

			res.redirect("/servers/seatmap");
		} else {
			res.render("login", { title: "Login", error: "Passwords do not match" });
		}
	}
};

//GET SEATMAP
const getSeatmap = async (req, res) => {
	res.render("seatmap");
};

//GET SEAT by ID
const getServerByID = (req, res) => {
	const { id, name, employeeid, password, ticket } = req.server;
	console.log(id, name, employeeid, password, ticket);

	res.render("server", {
		title: "Server PROFILE",
		id,
		name,
		employeeid,
		password,
		ticket,
	});
	if ((req.server = true)) {
		console.log("code is working");
	} else {
		console.log(err);
	}
	// console.log(Guest)
	// res.redirect(`/users/guest/${id}`)
};

//GET GUEST BY ID
const getGuestByID = (req, res) => {
	const { id, ticket, seat, items, server } = req.guest;
	console.log(id, ticket, seat, items, server);

	res.render("guest", {
		title: "GUEST PROFILE",
		id,
		ticket,
		seat,
		items,
		server,
	});
	if ((req.guest = true)) {
		console.log("code is working");
	} else {
		console.log(err);
	}
};

//POST GUEST by ID
const postGuestByID = (req, res) => {
	// const {id, ticket, seat, name, item, server} = req.guest;

	Server.onselect = function () {
		console.log("test");
	};
};

const getEntreeByID = async (req, res) => {
	// res.render("entree", { title: "this is the entree" });

	const { id, entreeitem, price } = req.entree;
	console.log(id, entreeitem, price);

	res.render("entree", {
		title: "ENTREE ITEMS",
		id,
		entreeitem,
		price,
	});
	if ((req.entree = true)) {
		console.log("code is working");
	} else {
		console.log(err);
	}
};

const postEntreeByID = (req, res) => {

};




module.exports = {
	createUser,
	postCreateuser,
	getLogin,
	postLogin,
	getSeatmap,
	getServerByID,
	getAllUsers,
	getGuestByID,
	postGuestByID,
	getEntreeByID,
	postEntreeByID,
};
