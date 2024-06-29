const mongoose = require("mongoose");
const dbgr = require("debug")("development:mongoose");
const config = require("config");
require('dotenv').config();

const dbURL = process.env.MONGODB_URI;
mongoose
.connect(dbURL)
.then(() => {
    console.log("connected");
})
.catch((err) => {
    console.log(err.message);
})
module.exports = mongoose.connection;
