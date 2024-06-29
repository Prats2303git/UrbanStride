const userModel = require("../models/user-model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const {generateToken} = require("../utils/generateToken");

module.exports.registerUser = async (req,res)=>{
    try{
        let { email, fullname, password } = req.body;
        let currUser = await userModel.findOne({email:email});
        if(currUser) res.status(400).send("An account already exists with these credentials");

        bcrypt.genSalt(10, (err,salt)=>{
            bcrypt.hash(password, salt, async (err,hash)=>{
                if(err)
                    res.send(err.message);
                else
                {    let user = await userModel.create({
                        email,
                        fullname,
                        password : hash
                    })
                    let token = generateToken(user);
                    res.cookie("token",token);
                    res.redirect("/user/login");
                }
            })
        })
    }
        
catch(err){
    res.send(err.message);
}
}

module.exports.loginUser = async (req,res)=>{
    let { email, password } = req.body;
    let currUser = await userModel.findOne({ email : email });
    if(!currUser) 
    {   
        req.flash("error","Bad credentials");
        res.redirect("/user/login");
    }
    else
    {
        bcrypt.compare(password, currUser.password, (err,result)=>{
            if(result)
                {
                    let token = generateToken(currUser);
                    res.cookie("token",token);
                    res.redirect("/home");
                }
            else
            {
                req.flash("error","Bad credentials");
                res.redirect("/user/login");
            }
        })
    }
}
module.exports.logOut = (req,res)=>{
    if(req.cookies.token)
        {
            delete req.cookies.token;
            res.redirect("/")
        }
}