const express = require("express");

const app = express();

const PORT = process.env.PORT || 8080;

const routes = require("./app/routing/router");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// api(app);

// html(app, path);




app.use(routes);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});