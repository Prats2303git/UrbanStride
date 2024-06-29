const userModel = require("../models/user-model");
const jwt = require("jsonwebtoken");

module.exports = async (req,res,next)=>{
    if(!req.cookies.token)
    {
        req.flash("error","You must Login first !");
        return res.redirect("/");
    }
    try
    {
        let decoded = jwt.verify(req.cookies.token, process.env.JWT_TOKEN);
        let user = userModel.findOne({ email : decoded.email }).select("-password"); // coz I don't want password
        req.user = user;
        next();
    }
    catch(err)
    {
        req.flash("error","Uhh, Something went wrong !");
        res.redirect("/");
    }

}
