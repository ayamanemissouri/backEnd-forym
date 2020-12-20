const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
    nom: {
        type: String,
        trim : true,
        required : true,
        maxlength : 32

    },
    prenom: {
        type: String,
        trim : true,
        required : true,
        maxlength : 32

    },
    username: {
        type: String,
        trim : true,
        required : true,
        maxlength : 32

    },
    email: {
        type: String,
        trim : true,
        required : true,
        unique : 32

    },
    hashed_password: {
        type: String,
        required : true
    }

    },{timestamps: true}
);



module.exports = mongoose.model("User", userSchema);