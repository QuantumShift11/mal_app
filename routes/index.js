const express = require("express");
const router = express.Router();

//const {homePage,loginPage,processLogin,signupPage,processSignup,logoutPage} = require("../controllers/user");

const {home,offers,uiredress,tabnab,tabnab_script,read_article,logger,processLogin} = require("../controllers/user");

router.get("/",home); // Home page

router.get("/offers",offers); // Home page

router.get("/uiredress",uiredress); // Home page reverse_tab

router.get("/login",tabnab); // Home page reverse_tab

router.post("/login",processLogin); // Process login

router.get("/tabnab_script",tabnab_script); // Home page reverse_tab

router.get("/read_article",read_article);

router.get("/logger",logger); // search delete


module.exports = router;