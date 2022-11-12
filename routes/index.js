var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.status(200).send("Welcome to Coder!");
});

const homeAPI = require('./home.api')
router.use('/home', homeAPI);

module.exports = router;
