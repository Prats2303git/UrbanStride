const express = require('express');
const app = express();
const path = require('path');
const { v4 : uuidv4 } = require('uuid');
const methodOverride = require('method-override');
const cookies = require('cookie-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const expressSession = require("express-session");
const flash = require("connect-flash");

const indexRouter = require("./routes/indexRouter");
const ownersRouter = require("./routes/ownersRouter");
const usersRouter = require("./routes/usersRouter");
const productsRouter = require("./routes/productsRouter");

const db = require("./config/mongoose-connection");

app.use(
    expressSession({
        resave : false,
        saveUninitialized : false,
        secret : process.env.EXPRESS_SESSION_SECRET
    })
);
app.use(flash());
app.use(cookies());
app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(methodOverride("_method"));

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

app.use(express.static(path.join(__dirname,"public")));

app.use("/",indexRouter);
app.use("/owner",ownersRouter);
app.use("/user",usersRouter);
app.use("/product",productsRouter);

let port = 8080;
app.listen(port,()=>{
    console.log(`app listening on port ${8080}`);
});