// Define a DB structure with our modals. Like an ERD from MySQL!

//! 1 import Mongoose

const mongoose = require("mongoose");

// ? 2 Define the schema with keys + validations

const JokeSchema = new mongoose.Schema(
    {
        setup: {
            type: String,
            required: [true, "Setup is Required!"],
            minlength: [2, "Must be 2+ characters in length!"],
        },
        punchline: {
            type: String,
            required: [true, "Jokes aren't funny without a Punchline!"],
        },
    },
    { timestamps: true } //This auto gens the createdAt and updatedAt fields
);

// * 3 Create a model with the schema and export it

const Joke = mongoose.model("Joke", JokeSchema);

module.exports = Joke;
