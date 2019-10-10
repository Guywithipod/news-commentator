const friendsData = require("../app/data/friends");


module.exports = function(app) {
  

    app.get("/api/friends", function(req, res) {
        res.json(friendsData);
      });

      
  app.post("/api/friends", function(req, res) {
  
      //Keep track of current minimum
      let min = Infinity;
      //Keep track of user with current minimum
      let minUser = undefined;
      //FOr loop iterates over each friend in friends.js
      for (let i=0; i< friendsData.length;i++){

        let difference = 0;
          //We need to keep track of difference for each inner loop

            //Inner for loop iterates over either the incoming score or the scores property of the current user i is looking at (same)
            for (let j=0; j< friendsData[i].scores.length; j++){

               //How do we take the abs value -- subtract the two scores, wee need to add whatever that value is to differemce
               const absValue = Math.abs(req.body.scores[j]-friendsData[i].scores[j])

               difference += absValue;
            }

            //we should compare the current difference we just calculated with who we think is already the current min, if we have a better user then we store that info  
            if( difference < min){
                 min = difference;
                 minUser = friendsData[i];
            }
      }

    //After both loops we return user stored in min var

     res.json(minUser);
     
    });
}

//    * A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.


//    * A POST routes `/api/friends`. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.