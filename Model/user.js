const mongoose=require("mongoose");
const UserSchema=new mongoose.Schema({
    firstName:{
        type:String,
    },
    lastName:{
        type:String
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true
    },
    age:{
        type:Number,

    }
})
module.exports=mongoose.model("user",UserSchema);