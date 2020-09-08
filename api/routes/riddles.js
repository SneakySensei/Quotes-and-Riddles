const express = require("express");
const { routes } = require("../../app");

const router = express.Router();

const mongoose = require("mongoose");
const Riddle = require("./models/riddle.js");

router.get("/", (req, res, next) => {
  Riddle.countDocuments().exec((err, count) => {
    var random = Math.floor(Math.random() * count);
    Riddle.findOne()
      .skip(random)
      .exec()
      .then((result) => {
        console.log(result);
        res.status(200).json(result);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  });
});

router.post("/", (req, res, next) => {
  // Create a new instancce of the model
  const riddle = new Riddle({
    _id: new mongoose.Types.ObjectId(),
    question: req.body.question,
    answer: req.body.answer,
  });

  riddle
    .save()
    .then((result) => {
      console.log(result);
      res.status(200).json(riddle);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete("/:riddleId", (req, res, next) => {
  const id = req.params.riddleId;

  Riddle.remove({ _id: id })
    .exec()
    .then((result) => {
      console.log(result);
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});

module.exports = router;
