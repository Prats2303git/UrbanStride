const express = require('express');
const router = express.Router();
const upload = require("../config/multer-config");
const productModel = require("../models/product-model");

router.post("/create",upload.single("image"), async (req,res) => {

    try{
        let { prodname, image, price, bgcolor } = req.body;

    let product = await productModel.create({
    prodname,
    image : req.file.buffer,
    price,
    bgcolor
    })
    req.flash("success", "product created successfully");
    res.redirect("/owner/products/create");
    }catch(err){
        res.send(err.message);
    }
})

module.exports = router;