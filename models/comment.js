const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema.Types

const commentSchema = new mongoose.Schema({
    message: {
        type: String,
        required : true,
        maxlength : 60
    },
    post: {
        type: ObjectId,
        ref : 'Post',
       
    },
    user:{
        type:ObjectId,
        ref:'User'
    }
    },{timestamps: true}
);
module.exports = mongoose.model("Comment", commentSchema);