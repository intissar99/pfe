const mongoose = require("mongoose")
mongoose.Promise= global.Promise
const adminSchema= new mongoose.Schema(
    {
       username: String ,
       password : String 
    },
    { 
        timestamps:true 

    }
)
const admin=mongoose.model("admin",adminSchema)
 module.exports= admin