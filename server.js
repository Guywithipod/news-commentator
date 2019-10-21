
const express = require("express");
const exphbs = require ("express-handlebars");
const app = express();
const PORT = process.env.PORT || 3000;
const mongoose = require('mongoose');

app.use(express.static("/public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

require('./routing/apiRoutes')(app);
require('./routing/htmlRoutes')(app);

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

mongoose.connect(MONGODB_URI);


app.listen(PORT, function() {
   
    console.log("Server listening on: http://localhost:" + PORT);
    
  });
  

