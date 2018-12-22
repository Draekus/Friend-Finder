const express = require("express");

const app = express();

const PORT = process.env.PORT || 8080;

// Imports all the http routes
const routes = require("./app/routing/router");

// middleware converting data sent through express
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// enables all the routes that are defined in router.js
app.use(routes);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});