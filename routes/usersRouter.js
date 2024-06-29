const express = require('express');
const router = express.Router();
const {registerUser} = require("../controllers/authController");
const {loginUser} = require("../controllers/authController");


router.get("/login",(req,res)=>{
    let error = req.flash("error");
    res.render("login.ejs", { error });
})
router.get("/register",(req,res)=>{
    res.render("register.ejs");
})
router.post("/register",registerUser);

router.post("/login",loginUser);



module.exports = router;