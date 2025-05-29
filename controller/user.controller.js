import { userModel } from "../models/user.model.js";

export const createuser = async (req,res)=>
{
    const {name,email,password,mobile}=req.body;
    let newUser = new userModel({name,email,password,mobile});
    let userData = await newUser.save();
    res.send(userData); 
}
export const updateuser = async (req,res)=>
{
    let userid =req.params.id;
    const {name,email,password,mobile}=req.body;
    await userModel.updateOne({_id:userid},{$set:{name:name,email:email,password:password,mobile:mobile}})
    let userData =await userModel.findById(userid);
    res.send(userData);
}
export const deleteuser = async (req,res)=>
{
    let userid=req.params.id;
    let userData =await userModel.findById(userid);
    await userModel.deleteOne({_id:userid})
    let respons={
        userData:userData
        ,status:"deleted"
    }
    res.send(respons);
}
export const getalluser = async (req,res)=>
{
    let userData = await userModel.find();
    res.send(userData);
}