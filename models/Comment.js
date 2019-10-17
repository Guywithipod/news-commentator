const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const commentSchema = new Schema({
    title:{
        type: String,
        required: true,
        
    },
    comment:{
        type: String,
        required: true,
    },
    articleId: {
        unique: true,
        type: Schema.Types.ObjectId,
        require: true
    }
});
const Comment = mongoose.model("Comment", commentSchema )
module.exports =  Comment;