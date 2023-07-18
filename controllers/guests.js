const { User } = require("../models");
//Guest from User***
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");

//GET CREATE USER
const createUser = async (req, res) => {
	res.render("create", { title: "create employee" });
};
//POST CREATE USER
const postCreateuser = async (req, res) => {
	console.log(req.body);
	const { seat, name, item, ticket } = req.body;
	console.log(seat, name, item, ticket);

	const newUser = await Guest.create({
		seat,
		name,
		item,
		ticket,
	});
	//res.redirect() will take to login page
	// res.redirect('/users/login')
};

/////////////////////
/////////////////////
//GET LOGIN
const getLogin = async (req, res) => {
	res.render("login", { title: "login to our app" });
};

//POST LOGIN
// const postLogin = async (req, res)=>{
//     const { username, password } = req.body;

// 	const user = await User.findOne({
// 		where: { username },
// 	});

// 	if (user == null) {
// 		res.render("login", { title: "Login", error: "User not found" });
// 	} else {
// 		const hashedPW = user.password;
// 		await bcrypt.compare(password, hashedPW, function (err, result) {
// 			console.log(result);
// //JWT TOKEN CODE
// 			// if (result) {
// 			// 	//this saves it as a cookie so i can create a session??
// 			// 	const token = jwt.sign({ foo: "bar" }, "superSecretPrivateKey", {
// 			// 		expiresIn: "1h",
// 			// 	});
// 			// 	console.log(token);

// 			// 	res.cookie("token", token);
// 			// 	res.redirect("/");
// 			// } else res.render("login", { title: "Login", error: "Passwords do not match" });
// 		});
// 	}
// 	// res.redirect("/users/seatmap");
// 	//HAVING THE CODE ABOVE WILL NOT VALIDATE THE TOKEN
// 	//HAS TO HAVE IT IN DATABASE
// }
/////////////////////
/////////////////////

console.log("hallo ignore me");
//GET SEATMAP
const getSeatmap = async (req, res) => {
	res.render("seatmap", { title: "Welcome to the seatmap, choose a seat" });
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
		console.log("Success!");
	} else {
		console.log(err);
	}
};

module.exports = {
	postCreateuser,
	createUser,
	getLogin,
	// postLogin,
	getSeatmap,
	getSeatByID,
};
