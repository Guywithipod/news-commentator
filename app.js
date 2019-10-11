const mongoose = require("mongoose");
mongoose.connect(MONGODB_URI);

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const comments = new mongoose.Schema({
    user: String,
    comment: String
  });

  const User = mongoose.model("User", comments);

  app.post("/addcomment", (req, res) => {
    const commentsData = new User(req.body);
    commentsData.save()
      .then(item => {
        res.send("item saved to database");
      })
      .catch(err => {
        res.status(400).send("unable to save to database");
      });
  });