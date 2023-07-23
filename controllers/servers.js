const { Server } = require("../models");
const { Guest } = require("../models");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { token } = require("morgan");

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

			if (result= true) {
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
	
	// res.redirect("/users/seatmap");

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
	const { id, ticket, seat, name, item, server } = req.guest;
	console.log(id, ticket, seat, name, item, server);

	res.render("guest", {
		title: "GUEST PROFILE",
		id,
		ticket,
		seat,
		name,
		item,
		server,
	});
	if ((req.guest = true)) {
		console.log("code is working");
	} else {
		console.log(err);
	}
};
const postGuestByID = (req, res)=>{
	// const {id, ticket, seat, name, item, server} = req.guest;
	
	Server.onselect = function(){
		console.log('test')
	};

}

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
};
