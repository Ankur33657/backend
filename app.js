const express=require("express");
const mongoose=require("mongoose");
const Routes=require('./Route/route.js')
require("dotenv").config();
const app=express();
app.use(express.json());
app.use('/api',Routes);
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
   app.listen(process.env.PORT,()=>{
    console.log("Db connect successfull && server started");
   })
}).catch((err)=>{
    console.log("Error");
})