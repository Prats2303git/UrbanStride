const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    email : String,
    fullname : 
    {
        type : String,
        maxlength : 30,
        trim : true
    },
    password : String,
    // cart : {
    //     type : Array,
    //     default : []
    // },
    // isAdmin : Boolean,
    // orders : {
    //     type : Array,
    //     default : []
    // },
})

module.exports = mongoose.model("user",userSchema);