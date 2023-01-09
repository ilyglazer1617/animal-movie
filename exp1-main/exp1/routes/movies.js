const express = require("express");
const Joi = require("joi");
const { Movie, vaidateMovie } = require("../Models/movies");
const router = express.Router();

//getAll
router.get("/", async (req, res) => {
  const movies = await Movie.find();
  res.send(movies);
});
//get
router.get("/:id", (req, res) => {
  res.send(movies.find((m) => m.id == req.params.id));
});
//post
router.post("/", (req, res) => {
  const { error } = validator(req.body);
  if (error) {
    res.status(404).send(error.details[0].message);
    return;
  }
  movies.push({ ...req.body, id: movies.length + 1 });
  res.send(movies[movies.length - 1]);
});
//delete
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  movies.filter((m) => m.id != id);
  res.send(`Delete record with id ${id}`);
});
//put
router.put("/", function (req, res) {
  const { id } = req.body;
  const { error } = validator(req.body);
  if (error) {
    res.status(404).send(error.details[0].message);
    return;
  }
  movies.splice(
    movies.indexOf((a) => a.id == id),
    1,
    { ...req.body, id: movies.length + 1 }
  );
  res.send("updated");
});

//delete all
router.delete("/", function (req, res) {
  movies = [];
  res.send(`Done`);
});

let validator = (obj) => {
  const schema = {
    name: Joi.string().required().min(3).max(10),
    id: Joi,
    genre: Joi.string().required().min(3).max(10),
    length: Joi.number().required().integer().min(3).max(1000),
  };

  return Joi.validate(obj, schema);
};

module.exports = router;
