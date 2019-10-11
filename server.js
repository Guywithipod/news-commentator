
const express = require("express");
const exphbs = require ("express-handlebars");
const app = express();
const PORT = process.env.PORT || 3000;
const axios = require("axios")
const cheerio = require("cheerio")

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(express.static("public"));

app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

const routes = require("./routing/apiRoutes.js");
app.use(routes);

const results = [];

axios.get("http://www.surrenderat20.net").then(function(response) {

  var $ = cheerio.load(response.data);
  $("h1.news-title").each(function(i, element) {
    var title = $(element).children().text();
    var link = $(element).children().attr("href");
    var quote = $("i").text();
    results.push({
      title: title,
      link: link,
      quote: quote
    });
  });
  console.log(results);
});

//gotta figure out how to send the handlebar page
app.get("/home",function(req,res){
    // res.sendFile(__dirname + "/index.html");
    res.render('home', { "title": "Test" }); 
});

app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });
  

