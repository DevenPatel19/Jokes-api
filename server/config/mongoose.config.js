//import the mongoose library
const mongoose = require("mongoose");

//EXTRACT VARS FROM THE .ENV
const dbName = process.env.DB;
const username = process.env.ATLAS_USERNAME;
const pw = process.env.ATLAS_PASSWORD;

// mongodb+srv://bob:<password>@my-first-db.flvdi78.mongodb.net/
const uri = `mongodb+srv://${username}:${pw}@my-first-db.flvdi78.mongodb.net/${dbName}?retryWrites=true&w=majority`;

// mongoose promise
mongoose
    .connect(uri)
    .then(() =>
        console.log("🦄🦄🦄🦄🦄Established a connection to the Mongo DB")
    )
    .catch((err) =>
        console.log(
            "❌❌❌❌Something went wrong when connecting to the Mongo DB",
            err
        )
    );

// this is how we create a server that connects remotely to an instance we created in Atlas
