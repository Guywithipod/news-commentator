const db = require('../models');
module.exports = function(app) {

    app.get('/', function(req, res){
        //TODO fetch data from all articles being saved
      db.Article.find({}).then(function(results){
        res.render('index', {results});
      });
      })
  
  }