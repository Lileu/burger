// DEPENDENCIES
var express = require("express");
var exphbs = require("express-handlebars");
var bodyParser = require("body-parser");
//var methodOverride = require('method-override');

// EXPRESS CONFIG
var app = express();
var PORT = process.env.PORT || 8000; // including alternative port for heroku

// HANDLEBARS SETUP
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// BODY-PARSER SETUP
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// EXPRESS MIDDLEWARE
app.use(express.static("public")); // Static middleware function which allows access to the public folder via its absolute path

// ROUTING
var routes = require("./controllers/burgers_controller.js");
app.use(routes);

// LISTENER
app.listen(PORT, function() {
  console.log("Burger App is listening on http://localhost:" + PORT);
});
