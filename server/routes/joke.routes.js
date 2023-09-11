//1 Import the controller
const JokeController = require("../controllers/joke.controller");

module.exports = (app) => {
    // Get Requests
    // Route Sanity Test
    app.get("/api/test", JokeController.apiTest);

    // Get all route
    app.get("/api/jokes", JokeController.allJoke);

    // Get one by ID
    app.get("/api/jokes/:id", JokeController.oneJoke);

    // Post Requests
    app.post("/api/jokes/", JokeController.createJoke);

    // 	Put Requests
    // ? Put vs Patch?
    // ? Put sets the entire data entry and patch only does a piece
    app.patch("/api/jokes/:id", JokeController.updateJoke);

    // Delete Requests
    app.delete("/api/jokes/:id", JokeController.deleteJoke);
};

// 3 Import routes to our server

// module.exports = router;
