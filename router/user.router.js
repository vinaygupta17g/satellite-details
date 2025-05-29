import express from 'express'
import { createuser, deleteuser, getalluser, updateuser } from '../controller/user.controller.js';
let userRouter = express.Router();
userRouter.get("/getalluser",getalluser);
userRouter.post("/createuser",createuser);
userRouter.delete("/deleteuser",deleteuser);
userRouter.put("/updateuser",updateuser);

export {userRouter}