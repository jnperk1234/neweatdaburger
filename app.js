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

server.listen(process.env.PORT || 3000, function () {
  console.log(
    'Express server listening on port %d in %s mode',
    this.address().port,
    app.settings.env
  )
})
