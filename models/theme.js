const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema

const themeSchema = new mongoose.Schema({
    titre: {
        type: String,
        required : true,
        maxlength : 32
    },
    description: {
        type: String,
        required : true,
        maxlength : 2000
    },
    forum:{
            type:ObjectId,
            ref:"Forum"
        },
    moderateur:{
        type:ObjectId,
        ref:"User"
    },
    totalViews:{
        type: Number
    },
    totalPost:{
        type:Number
    }
    
    

    
    
    },
    {timestamps: true}
);
//virtuals fields
module.exports = mongoose.model("Theme", themeSchema);