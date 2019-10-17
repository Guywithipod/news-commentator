const db = require('../models');
const axios = require('axios');
const cheerio = require('cheerio');

module.exports = function(app) {

  app.post("/article/comment",function(req,res){
    console.log('Route hit', req.body);
    db.Comment.insertMany([req.body], function(err, results, fields){
      if(err && err.err.code !== 11000)throw err;
      res.redirect('/');
    })
    });


  app.get('/scrape', function(req,res){
    axios.get("http://www.surrenderat20.net").then(function(response) {
      
      const results = [];
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
      db.Article.insertMany(results, function(err, results, fields){
        if(err && err.err.code !== 11000)throw err;
        res.redirect('/');
      });
    });
  });

  app.get('/article/comment/:articleId', function(req,res){
      const {articleId} = req.params;
      db.Comment.find({articleId}).then(results => {
          res.json(results);
      }).catch(err => {
        console.log(err);
      })
  });

}