const { Server } = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//Guest from User***
const getAllUsers = async (req, res, next) => {
	const servers = await Server.findAll();
	res.send("respond with a resource");
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

	res.redirect("/users/login");
};

//GET LOGIN
const getLogin = async (req, res) => {
	res.render("login", { title: "login to POS" });
};

//POST LOGIN
const postLogin = async (req, res) => {
	const { name, password } = req.body;

	const server = await Server.findOne({
		where: { name },
	});

	if (server == null) {
		res.render("login", { title: "Login", error: "User not found" });
	} else {
		const hashedPW = server.password;
	    bcrypt.compare(password, hashedPW).then(function (err, result) {
			console.log(result);

			if (result) {
				//this saves it as a cookie so i can create a session??
				const token = jwt.sign({ foo: "bar" }, "superSecretPrivateKey", {
					expiresIn: "1h",
				});
				console.log(token);

				res.cookie("token", token);
				// res.redirect("/");
			} else res.render("login", { title: "Login", error: "Passwords do not match" });
		});
	}
	res.redirect("/users/seatmap");
};

//GET SEATMAP
const getSeatmap = async (req, res) => {
	res.render("seatmap");
};

//GET SEAT by ID
const getGuestByID = (req, res) => {
	const { seat, name, item, ticket, id } = req.guest;
	console.log(seat, name, item, ticket, id);

	res.render("guest", {
		title: "GUEST PROFILE",
		id,
		seat,
		name,
		item,
		ticket,
	});
	if ((req.gust = true)) {
		console.log("code is working");
	} else {
		console.log(err);
	}
	// res.reditect("/users/create")
};

module.exports = {
	createUser,
	postCreateuser,
	getLogin,
	postLogin,
	getSeatmap,
	getGuestByID,
	getAllUsers,
};
