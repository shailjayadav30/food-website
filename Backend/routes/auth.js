const express = require('express')
const router  = express.Router()
const home=require("../controllers/authcontroller")
const registration=require("../controllers/authcontroller")



router.route("/").get(home)
router.route("/register").get(registration)


// const {signup}=require("../controllers/authcontroller")

// const {login}= require("../controllers/authcontroller")

// const {signupvalidation,loginvalidation}=require("../middlewares/authvalidation")

// const router=require("express").Router()
// router.post("/login",loginvalidation,login)
// router.post("/signup",signupvalidation,signup)

module.exports=router
