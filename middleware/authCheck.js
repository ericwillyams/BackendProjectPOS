const jwt = require('jsonwebtoken');

const authCheck = (req, res, next) => {
const token = req.cookies.token;
console.log ("auth check is working")

//verify jwt
let decoded = null
try { const decoded = jwt.verify(token, "superSecretPrivateKey")
console.log(decoded);
    
} catch (error) {
    console.log(error);
    
}



if (decoded == "true") {
    next()

}   else {
    res.render('error');
}
}

module.exports = authCheck;