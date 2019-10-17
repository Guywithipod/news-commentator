const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const articleSchema = new Schema({
    title:{
        type: String,
        required: true,
        unique: true
    },
    link:{
        type: String,
        required: true,
    },
    quote:{
        type: String,
        required: true,
    },
});



var Article = mongoose.model('Article', articleSchema);

module.exports = Article;