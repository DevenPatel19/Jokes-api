// STEP 1 IMPORT DEPENDENCIES
// We need Express so we pull it here -- Express js documentation
const express = require("express");
// must have this at the top to access the .env file
// executes the library named
require("dotenv").config();
// Invoke Express
const app = express();
// claim your PORT
// const PORT = 8000;
// EXTRACT PORT FOR APP.LISTEN STRING CALL
const PORT = process.env.PORT;

// STEP 2 CONFIGURE EXPRESS
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
require("./config/mongoose.config");

// STEP 3 ROUTES
// const routes = require("./routes/movie.routes");
// routes(app);
const AllJokes = require("./routes/joke.routes");
AllJokes(app);

// 4 Listen to Port
// this needs to be below the other code blocks - listen
app.listen(PORT, () => console.log(`🎈🎈🎈 Listening on port: ${PORT}`));
