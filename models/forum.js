const mongoose = require('mongoose')
const forumSchema = new mongoose.Schema({
    titre: {
        type: String,
        required : true,
        maxlength : 32
    }
    },{timestamps: true}
);
module.exports = mongoose.model("Forum", forumSchema);