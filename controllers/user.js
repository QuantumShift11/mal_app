const User = require('../models/User');
const bcrypt = require('bcrypt');



exports.home = function(req,res){
        res.render("pages/home",{
            "error":"",
            "isLoggedIn": false
        });
    }


exports.offers = function(req,res){
        res.render("pages/csrf_explt",{
            "error":"",
            "isLoggedIn": false
        });
    }

exports.uiredress = function(req,res){
        res.render("pages/uiredress",{
            "error":"",
            "isLoggedIn": false
        });
    }

exports.tabnab_script = function(req,res){
        res.render("pages/tabnab_script",{
            "error":"",
            "isLoggedIn": false
        });
    }

exports.tabnab = function(req,res){
        res.render("pages/login",{
            "error":"",
            "isLoggedIn": false
        });
    }

exports.read_article = function(req,res){
        res.render("pages/xss_exploit",{
            "error":"",
            "isLoggedIn": false
        });
    }

exports.processLogin = async function(req,res){
        // get the data.
        let email = req.body.email;
        let password = req.body.password;
        // check if we have data.
        console.log('email :'+email)
        console.log('password :'+password)
        if(email && password){
                if(1==1){
                    // set the session.
                    //req.session.user = existingUser._id;
                    //console.log(' session_id ' + existingUser._id)
                    //console.log(' req.session.user ' + req.session.user)
                    // Redirect to the home page.
                    //console.log('processLogin Session before login : '+req.session.user)
                    //res.redirect("pages/home");
                    res.render("pages/home");
                }else{
                    // return an error.
                    res.render("pages/login",{
                        "error":"Invalid password",
                        isLoggedIn: false
                    });
                }
            }else{
                // return an error.
                res.render("pages/login",{
                    "error":"User with that email does not exist.",
                    isLoggedIn:false
                });
            }
        } 

exports.logger = function(req,res){
        console.log('check cookies for xss and credentials for tabnabbing')
        res.send('<p>xs787asbca6w62cjabjcs</p>')
       }
