// 1. Inside your `burger` directory, create a folder named `controllers`.

// 2. In `controllers`, create the `burgers_controller.js` file.

// 3. Inside the `burgers_controller.js` file, import the following:

//    * Express
//    * `burger.js`

// 4. Create the `router` for the app, and export the `router` at the end of your file.


var express = require("express");
var burger = require("../models/burger.js");

var router = express.Router();



// Export routes for server.js to use.
module.exports = router;
