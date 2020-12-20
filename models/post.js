const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema

const postSchema = new mongoose.Schema({
    titre: {
        type: String,
        required : true,
        maxlength : 32
    },
    description: {
        type: String,
        required : true,
        maxlength : 150
    },
    theme:{
        type:ObjectId,
        ref:"Theme"
    },
    user:{
        type:ObjectId,
        ref:"User",
        required:true

    },
    nbComments:{
        type: Number
    }
    },{timestamps: true}
);

module.exports = mongoose.model("Post", postSchema);