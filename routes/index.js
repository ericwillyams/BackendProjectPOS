var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {title: 'Create Employee?'});
  // res.send('hello');
});



module.exports = router;

// const app = require('express')();
// app.get('/', (req, res)=>res.send('hello'));
// app.listen(3000)
