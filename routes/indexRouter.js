const express = require('express');
const router = express.Router();
const isLoggedin = require('../middlewares/isLoggedin');
const productModel = require("../models/product-model");
const {logOut} = require("../controllers/authController"); 

router.get("/",(req,res)=>{
    res.render("lander.ejs");
})

router.get("/home",isLoggedin, async (req,res)=>{
    let products = await productModel.find();

    res.render("userHome.ejs", { products });
});
router.post("/aboutus",isLoggedin, (req,res)=>{
    res.render("aboutus.ejs");
})
router.post("/contact",isLoggedin,(req,res)=>{
    res.render("contact.ejs");
})

router.post("/logout",logOut);

module.exports = router;

