import mongoose  from "mongoose";

let userSchema =mongoose.Schema(
    {
        name:{type:String,required:true},
        email:{type:String,required:true,unique:true},
        password:{type:String,required:true},
        mobile:{type:String,required:true,unique:true}
    },
    {
        timestamps:true
    }
);

export const userModel = mongoose.model('user',userSchema);