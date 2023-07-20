const { Server } = require("../models");
console.log("Server", Server);
//Guest from User***
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

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
		await bcrypt.compare(password, hashedPW, function (err, result) {
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
const getSeatByID = (req, res) => {
	const { seat, name, item, ticket, id } = req.user;
	console.log(seat, name, item, ticket, id);

	res.render("seat", {
		title: "User Profile",
		seat,
		name,
		item,
		ticket,
	});
	if ((req.user = true)) {
		console.log("code is working");
	} else {
		console.log(err);
	}
};

module.exports = {
	createUser,
	postCreateuser,
	getLogin,
	postLogin,
	getSeatmap,
	getSeatByID,
	getAllUsers,
};
