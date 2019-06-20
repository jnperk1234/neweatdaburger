var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.static("public"));

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.engine("handlebars", exphbs({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");



var routes = require("./controllers/burgers_controller.js");
app.use(routes);

app.listen(PORT, "0.0.0.0", function () {
  console.log("Listening on Port 3000");
});
