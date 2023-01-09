const mongoose = require("mongoose");
const Joi = require("joi");

const Movie = new mongoose.model(
  "Movie",
  new mongoose.Schema({
    name: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 50,
    },
    genre: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 10,
    },
    length: {
      type: Boolean,
      required: true,
    },
  })
);

function vaidateMovie(movie) {
  const schema = {
    name: Joi.string().min(3).max(50).required(),
    color: Joi.string().min(3).max(10).required(),
    flying: Joi.string().required(),
  };

  return Joi.validate(movie, schema);
}

module.exports = { Movie, vaidateMovie };
