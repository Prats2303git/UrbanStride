const mongoose = require('mongoose');
const ownerSchema = new Schema({
    fullname : 
    {
        type : String,
        minlength : 3,
        trim : true
    },
    email : String,
    password : String,  
    products : {
        type : Array,
        default : []
    },
    gstin : String
})

module.exports = mongoose.model("owner",ownerSchema);