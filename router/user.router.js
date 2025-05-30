import express from 'express'
import { createuser, deleteuser, getalluser, getuserbyid, login, updateuser } from '../controller/user.controller.js';
let userRouter = express.Router();
userRouter.get("/getalluser",getalluser);
userRouter.post("/createuser",createuser);
userRouter.delete("/deleteuser/:id",deleteuser);
userRouter.put("/updateuser/:id",updateuser);
userRouter.get("/getuserbyid/:id",getuserbyid);
userRouter.post("/loginuser",login);
export {userRouter}