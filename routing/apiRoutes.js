
module.exports = function(app) {





  
    app.get("/", function(req,res){
        // write some code here to call the comments that have been posted by the users. It should be stored in the mongo db

         const newsItem = {
            title: results.title,
            link: results.link,
            summary: results.link
          };
        res.send("hi")
    });

 
}