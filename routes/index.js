const express = require("express");
const router = express.Router();

//const {homePage,loginPage,processLogin,signupPage,processSignup,logoutPage} = require("../controllers/user");

const {home,csrf_explt,uiredress,tabnab,tabnab_script} = require("../controllers/user");

router.get("/",home); // Home page

router.get("/csrf_explt",csrf_explt); // Home page

router.get("/uiredress",uiredress); // Home page reverse_tab

router.get("/login",tabnab); // Home page reverse_tab

router.get("/tabnab_script",tabnab_script); // Home page reverse_tab

//router.get("/tabnab",tabnab); // Home page reverse_tab

//router.get("/tabnab_script",tabnab_script); // Home page reverse_tab

//router.get("/",tabnabbing); // Home page

//script ??? where it will be placed ? embed it html page link in href

//router.get("/login",loginPage); // Login page

//router.post("/login",processLogin); // Process login

//router.get("/signup",signupPage); // Signup page

//router.post("/signup",processSignup); // Process signup

//router.get("/logout",logoutPage); // Logout

module.exports = router;