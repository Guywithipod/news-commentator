const cheerio = require("cheerio");
const axios = require("axios");

module.exports = function(app) {
    app.get("/", function(req,res){
        // write some code here to call the comments that have been posted by the users. It should be stored in the mongo db
     
    axios.get("http://www.surrenderat20.net").then(function(response) {

        var $ = cheerio.load(response.data);
        var results = [];
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

         const newsItem = {
            title: results.title,
            link: results.link,
            summary: results.link
          };
        res.send("hi")
    });

 
}