// 1 import the model
const Joke = require("../models/joke.model");

//  Server Test:

module.exports.apiTest = (req, res) => {
    res.json({ message: "Server is working!" });
};

// 2 export all functions with a placeholder

// Create One
module.exports.createJoke = (req, res) => {
    Joke.create(req.body)
        .then((newJoke) => res.json(newJoke))
        .catch((err) => res.json(err));
};

// Read All
module.exports.allJoke = (req, res) => {
    Joke.find()
        .then((jokeList) => res.json(jokeList))
        .catch((err) => res.json(err));
};

// Read One
module.exports.oneJoke = (req, res) => {
    Joke.findOne({ _id: req.params.id })
        .then((oneJoke) => res.json(oneJoke))
        .catch((err) => res.json(err));
};

// Update One
module.exports.updateJoke = (req, res) => {
    Joke.findOneAndUpdate({ _id: req.params.id }, req.body, {
        new: true,
        runValidators: true, // Enabling validation step
    })
        .then((updatedJoke) => res.json(updatedJoke))
        .catch((err) => res.json(err));
};

// Delete One
module.exports.deleteJoke = (req, res) => {
    Joke.deleteOne({ _id: req.params.id })
        .then((status) => res.json(status))
        .catch((err) => res.json(err));
};
