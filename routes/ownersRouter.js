const express = require('express');
const router = express.Router();

router.get("/products/create",(req,res) => {
    let success = req.flash("success");
    res.render("createproducts.ejs", { success });
})

module.exports = router;