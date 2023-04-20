const User = require('../models/User');
const bcrypt = require('bcrypt');



exports.home = function(req,res){
        res.render("pages/home",{
            "error":"",
            "isLoggedIn": false
        });
    }


exports.csrf_explt = function(req,res){
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
        res.render("pages/tabnab",{
            "error":"",
            "isLoggedIn": false
        });
    }
