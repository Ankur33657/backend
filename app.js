const express=require("express");
const mongoose=require("mongoose");
require("dotenv").config();
const app=express();
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
   app.listen(process.env.PORT,()=>{
    console.log("Db connect successfull && server started");
   })
}).catch((err)=>{
    console.log("Error");
})