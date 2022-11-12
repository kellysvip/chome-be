const mongoose = require("mongoose");
var createError = require("http-errors");
const Home = require("../../../models/Home");

const getHomes = async (req, res, next) => {
  try {
    // const filter = req.query;

    const listOfFound = await Home.find()
    
    res.status(200).send({data: listOfFound.slice(0,5)})
  } catch (error) {
    next(createError(404, error));
  }
};

module.exports = { getHomes };
