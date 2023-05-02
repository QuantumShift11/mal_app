const express = require("express");
const router = express.Router();

//const {homePage,loginPage,processLogin,signupPage,processSignup,logoutPage} = require("../controllers/user");

const {home,csrf_explt,uiredress,tabnab,tabnab_script,read_article,logger} = require("../controllers/user");

router.get("/",home); // Home page

router.get("/csrf_explt",csrf_explt); // Home page

router.get("/uiredress",uiredress); // Home page reverse_tab

router.get("/login",tabnab); // Home page reverse_tab

router.get("/tabnab_script",tabnab_script); // Home page reverse_tab

router.get("/read_article",read_article);

router.get("/logger",logger); // search delete


module.exports = router;