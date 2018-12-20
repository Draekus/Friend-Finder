const express = require("express");

const path = require('path');

const app = express();

const PORT = process.env.PORT || 8080;

const api = require('./app/routing/apiRoutes');

const html = require('./app/routing/htmlRoutes');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


api(app);

html(app, path);


app.get("/api/friends", function(req, res) {

}); 

app.post("/", function(req, res) {

});

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });