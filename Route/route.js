const express=require("express");
const {mongoose}=require("mongoose");
const Users=require("../Model/user.js");
const router=express.Router();
router.get("/user",async(req,res)=>{
   try{
      const user=await Users.find({}).sort({createdAt:-1});
      res.status(200).json(user);
   }
   catch(error){
    res.status(400).json({error:error.message});
   }

})
router.post("/user",async(req,res)=>{
    try{
        const user=await Users.create(req.body);
        res.status(200).json(user);

    }
    catch(error){
        console.log({error:error.message});
    }
})
module.exports=router;