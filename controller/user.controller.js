import { userModel } from "../models/user.model.js";

export const createuser = async (req,res)=>
{
    res.send("User created");
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
    res.send("get all user");
}