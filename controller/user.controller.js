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
    res.send("User updated");
}
export const deleteuser = async (req,res)=>
{
    res.send("User deleted");
}
export const getalluser = async (req,res)=>
{
    let userData = await userModel.find();
    res.send(userData);
}