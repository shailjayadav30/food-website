const express = require("express");
const app = express();
const bodyparser=require("body-parser")
const cors=require("cors")
const Authrouter=require("./routes/auth")
const  orderrouter=require("./routes/order")
require("dotenv").config();
require("./models/db")
const PORT=process.env.PORT ||4000
app.get("/",(req,res)=>{
  res.send("shailja")})
app.use(bodyparser.json())
app.use(cors())
app.use("/auth", Authrouter);
app.use("/orders", orderrouter);
app.listen(PORT,()=>{
  console.log(`server is running on ${PORT}`)
})
