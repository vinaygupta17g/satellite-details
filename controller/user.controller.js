import { userModel } from "../models/user.model.js";
import bcrypt from 'bcrypt';
export const createuser = async (req,res)=>
{
    let {name,email,password,mobile}=req.body;
    password = await bcrypt.hash(password,10);
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

export const getuserbyid=async (req,res)=>
{
    let userid =req.params.id;
    let userData =await userModel.findById(userid);
    res.send(userData);
}
export const login=async (req,res)=>
{
    const {email,password} =req.body;
    let userData= await userModel.findOne({email})
    if (!userData)
        return res.send("user not found")
    const isMatch=await bcrypt.compare(password,userData.password)
    if(!isMatch)
        return res.send("password not found")
    res.send(userData)
}