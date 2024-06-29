const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    prodname : String,
    image : Buffer,
    price : Number,
    bgcolor : String
})

module.exports = mongoose.model("product",productSchema);